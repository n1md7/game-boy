import { Vector3 } from 'three';
import { Capsule } from 'three/examples/jsm/math/Capsule';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { InputController } from '@/src/first-person/controllers/InputController';
import { MouseController } from '@/src/first-person/controllers/MouseController';
import { Camera } from '@/src/setup';

export class Player {
  private readonly GRAVITY = 30;
  private readonly STEPS_PER_FRAME = 16;
  private readonly playerJumpVelocity = 10;

  private readonly playerBody: Capsule;
  private readonly playerVelocity: Vector3;
  private readonly inputController: InputController;
  private readonly mouseController: MouseController;

  private playerIsGrounded = false;

  constructor(private readonly camera: Camera, private readonly world: Octree) {
    const start = new Vector3(0, 0.35, 0);
    const end = new Vector3(0, 1, 0);
    this.playerBody = new Capsule(start, end, 0.35);
    this.playerVelocity = new Vector3();
    this.inputController = new InputController();
    this.mouseController = new MouseController(camera);

    // Starting position
    this.playerBody.translate(new Vector3(0, 2, 4));
  }

  get capsule() {
    return this.playerBody;
  }

  subscribe() {
    this.inputController.subscribe();
    this.mouseController.subscribe();

    this.mouseController.addEventListener('mouse:click-start', () => null);
    this.mouseController.addEventListener('mouse:click-end', () => null);
  }

  reset() {
    const center = new Vector3(0, 10, 0);
    this.playerBody.translate(center.sub(this.playerBody.end));
  }

  update(delta: number) {
    const deltaTime = Math.min(0.05, delta) / this.STEPS_PER_FRAME;

    // INFO: To enhance collision detection accuracy,
    // we divide the collision checking process into sub-steps.
    // This approach helps mitigate the potential issue of objects
    // passing through each other too rapidly to be detected reliably.
    for (let i = 0; i < this.STEPS_PER_FRAME; i++) {
      this.evaluateUserInput(deltaTime);
      this.updatePlayer(deltaTime);
    }
  }

  private getSideVector(vector: Vector3) {
    this.camera.getWorldDirection(vector);
    vector.y = 0;
    vector.normalize();
    vector.cross(this.camera.up);

    return vector;
  }

  private getForwardVector(vector: Vector3) {
    this.camera.getWorldDirection(vector);
    vector.y = 0;
    vector.normalize();

    return vector;
  }

  private evaluateUserInput(deltaTime: number) {
    const { forward, backward } = this.inputController.says.move;
    const { left, right } = this.inputController.says.move;
    const speedDelta = this.getSpeedDelta(deltaTime);

    const forwardVector = this.getForwardVector(new Vector3());
    const sideVector = this.getSideVector(new Vector3());

    // Makes sure that diagonal movement isn't faster as it would be otherwise
    const velocity = left || right ? speedDelta * 0.707 : speedDelta;
    if (forward) {
      // Forward movement is fastest as long as left or right aren't pressed
      this.playerVelocity.add(forwardVector.multiplyScalar(velocity));
      if (left) this.playerVelocity.add(sideVector.multiplyScalar(-velocity));
      if (right) this.playerVelocity.add(sideVector.multiplyScalar(velocity));
    } else if (backward) {
      this.playerVelocity.add(forwardVector.multiplyScalar(-velocity));
      if (left) this.playerVelocity.add(sideVector.multiplyScalar(-velocity));
      if (right) this.playerVelocity.add(sideVector.multiplyScalar(velocity));
    } else {
      // Sideways movement a bit slower
      if (left) this.playerVelocity.add(sideVector.multiplyScalar(-speedDelta * 0.9));
      if (right) this.playerVelocity.add(sideVector.multiplyScalar(speedDelta * 0.9));
    }

    if (this.playerIsGrounded && this.inputController.says.jump) {
      this.playerVelocity.y = this.playerJumpVelocity;
    }
  }

  private getSpeedDelta(deltaTime: number) {
    // INFO: Not setting to ZERO, it gives a bit of air control when jumping
    const low = this.inputController.says.sprint ? 16 : 8;
    const high = this.inputController.says.sprint ? 96 : 48;

    return deltaTime * (this.playerIsGrounded ? high : low);
  }

  private updatePlayer(deltaTime: number) {
    const damping = { val: Math.exp(-8 * deltaTime) - 1 };

    if (!this.playerIsGrounded) {
      this.playerVelocity.y -= this.GRAVITY * deltaTime;

      // INFO: small air resistance
      damping.val *= 0.1;
    }
    this.playerVelocity.addScaledVector(this.playerVelocity, damping.val);
    const deltaPosition = this.playerVelocity.clone().multiplyScalar(deltaTime);
    this.playerBody.translate(deltaPosition);
    this.evaluateCollisions();

    // Update the camera position
    this.camera.position.copy(this.playerBody.end);
  }

  private evaluateCollisions() {
    this.playerIsGrounded = false;
    const intersect = this.world.capsuleIntersect(this.playerBody);

    if (intersect) {
      this.playerIsGrounded = intersect.normal.y > 0;

      if (!this.playerIsGrounded) {
        this.playerVelocity.addScaledVector(intersect.normal, -intersect.normal.dot(this.playerVelocity));
      }

      this.playerBody.translate(intersect.normal.multiplyScalar(intersect.depth));
    }
  }
}
