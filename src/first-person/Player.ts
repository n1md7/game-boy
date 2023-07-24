import { Vector3 } from 'three';
import { Camera } from '@/src/setup';
import { Capsule } from 'three/examples/jsm/math/Capsule';
import { Octree } from 'three/examples/jsm/math/Octree.js';

type Action = {
  goLeft: boolean;
  goRight: boolean;
  goForward: boolean;
  goBackward: boolean;
  jump: boolean;
  sprint: boolean;
};

export class Player {
  private readonly gravity = 30;
  private readonly steps = 16; // Steps per frame
  private readonly jumpVelocity = 10;

  private readonly body: Capsule;
  private readonly velocity: Vector3;

  private isGrounded = false;

  constructor(private readonly camera: Camera, private readonly world: Octree) {
    const start = new Vector3(0, 1, 0);
    const end = new Vector3(0, 1.75, 0);
    this.body = new Capsule(start, end, 0.35);
    this.velocity = new Vector3(0);

    this.updatePlayer = this.updatePlayer.bind(this);

    // Starting position
    this.body.translate(new Vector3(0, 2, 4));
  }

  get capsule() {
    return this.body;
  }

  reset() {
    const center = new Vector3(0, 1, 0);
    this.body.translate(center.sub(this.body.end));
  }

  update(delta: number) {
    // INFO: Respawn player if it falls off the map
    if (this.body.end.y < -32) this.reset();

    const deltaTime = Math.min(0.05, delta) / this.steps;

    // INFO: To enhance collision detection accuracy,
    // we divide the collision checking process into sub-steps.
    // This approach helps mitigate the potential issue of objects
    // passing through each other too rapidly to be detected reliably.
    const frame = { steps: this.steps };
    do this.updatePlayer(deltaTime);
    while (--frame.steps > 0);
  }

  action(action: Action, deltaTime: number) {
    const { goLeft, goRight, goForward, goBackward } = action;
    const speedDelta = this.getSpeedDelta(deltaTime, action.sprint);

    const forwardVector = this.getForwardVector(new Vector3());
    const sideVector = this.getSideVector(new Vector3());

    // Makes sure that diagonal movement isn't faster as it would be otherwise
    const velocity = goLeft || goRight ? speedDelta * 0.707 : speedDelta;
    if (goForward) {
      // Forward movement is fastest as long as left or right aren't pressed
      this.velocity.add(forwardVector.multiplyScalar(velocity));
      if (goLeft) this.velocity.add(sideVector.multiplyScalar(-velocity));
      if (goRight) this.velocity.add(sideVector.multiplyScalar(velocity));
    } else if (goBackward) {
      this.velocity.add(forwardVector.multiplyScalar(-velocity));
      if (goLeft) this.velocity.add(sideVector.multiplyScalar(-velocity));
      if (goRight) this.velocity.add(sideVector.multiplyScalar(velocity));
    } else {
      // Sideways movement a bit slower
      if (goLeft) this.velocity.add(sideVector.multiplyScalar(-speedDelta * 0.9));
      if (goRight) this.velocity.add(sideVector.multiplyScalar(speedDelta * 0.9));
    }

    if (this.isGrounded && action.jump) {
      this.velocity.y = this.jumpVelocity;
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

  private getSpeedDelta(deltaTime: number, sprint: boolean) {
    // INFO: Not setting to ZERO, it gives a bit of air control when jumping
    const low = sprint ? 16 : 8;
    const high = sprint ? 96 : 48;

    return deltaTime * (this.isGrounded ? high : low);
  }

  private updatePlayer(deltaTime: number) {
    const damping = { val: Math.exp(-8 * deltaTime) - 1 };

    if (!this.isGrounded) {
      this.velocity.y -= this.gravity * deltaTime;

      // INFO: small air resistance
      damping.val *= 0.1;
    }

    this.velocity.addScaledVector(this.velocity, damping.val);
    const deltaPosition = this.velocity.clone().multiplyScalar(deltaTime);
    this.body.translate(deltaPosition);

    this.evaluateIntersections();

    // Update the camera position
    this.camera.position.copy(this.body.end);
  }

  private evaluateIntersections() {
    this.isGrounded = false;
    const intersect = this.world.capsuleIntersect(this.body);

    if (intersect) {
      this.isGrounded = intersect.normal.y > 0;

      if (!this.isGrounded) {
        this.velocity.addScaledVector(intersect.normal, -intersect.normal.dot(this.velocity));
      }

      this.body.translate(intersect.normal.multiplyScalar(intersect.depth));
    }
  }
}
