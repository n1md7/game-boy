import { Vector3 } from 'three';
import { Capsule } from 'three/examples/jsm/math/Capsule';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { InputController } from '@/src/first-person/controllers/InputController';
import { MouseController } from '@/src/first-person/controllers/MouseController';
import { CrosshairController } from '@/src/first-person/controllers/CrosshairController';
import { WeaponController } from '@/src/first-person/controllers/WeaponController';
import { FlashLight } from '@/src/first-person/components/FlashLight';
import { Scene, Camera } from '@/src/setup';
import GUI from 'lil-gui';

export type WeaponName = 'DesertEagle' | 'M60'; // | 'M16' | 'MP5' | 'P90' | 'AWP' | 'M249' | 'Knife'
export type WeaponSound = 'shoot' | 'reload' | 'empty' | 'equip' | 'unequip';
export type Assets = Record<WeaponName, GLTF>;

export class Player {
  private readonly GRAVITY = 30;
  private readonly STEPS_PER_FRAME = 16;
  private readonly playerJumpVelocity = 10;

  private readonly playerBody: Capsule;
  private readonly playerVelocity: Vector3;
  private readonly inputController: InputController;
  private readonly mouseController: MouseController;
  private readonly flashlight: FlashLight;
  private readonly crosshairController: CrosshairController;
  private readonly weaponController: WeaponController;

  private playerIsGrounded = false; // On the floor (touching)
  private accuracy = 100;

  constructor(
    private readonly camera: Camera,
    private readonly world: Octree,
    private readonly scene: Scene,
    gui: GUI,
    assets: Assets
  ) {
    const start = new Vector3(0, 0.35, 0);
    const end = new Vector3(0, 1, 0);
    this.playerBody = new Capsule(start, end, 0.35);
    this.playerVelocity = new Vector3();
    this.inputController = new InputController();
    this.flashlight = new FlashLight(gui.addFolder('Flashlight'));
    this.weaponController = new WeaponController(gui.addFolder('Weapons'), assets, scene, camera);
    this.mouseController = new MouseController(camera, this.flashlight);
    this.crosshairController = CrosshairController.getInstance();

    this.scene.add(this.flashlight, this.flashlight.target);

    this.subscribe();
    // Set Player Y to be 30 units above the ground
    this.playerBody.translate(new Vector3(0, 5, 0));
  }

  get weapon() {
    return this.weaponController;
  }

  subscribe() {
    this.inputController.subscribe();
    this.mouseController.subscribe();

    this.inputController.addEventListener('flashlight:toggle', () => this.flashlight.toggle());
    this.mouseController.addEventListener('weapon:start-shoot', () => this.weapon.startShoot());
    this.mouseController.addEventListener('weapon:stop-shoot', () => this.weapon.stopShoot());
    this.inputController.addEventListener('weapon:reload', () => this.weapon.reload());
    this.inputController.addEventListener('weapon:switch', (event) => {
      if (event instanceof CustomEvent) {
        this.weapon.setWeapon(event.detail.weaponIndex);
      }
    });
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
    this.weapon.update(delta);
    this.updateCrosshair();
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

    this.flashlight.adjustBy(this.camera);
    this.weapon.adjustBy(this.camera);
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

  private updateCrosshair() {
    this.accuracy = 100;

    const { sprint, jump, move } = this.inputController.says;

    if (this.weapon.triggerIsPressed) this.accuracy -= 50;
    if (move.anyDirection) this.accuracy -= 25 + (sprint ? 25 : 0);
    if (jump) this.accuracy -= 50;
    this.crosshairController.setAccuracy(this.accuracy);
  }
}
