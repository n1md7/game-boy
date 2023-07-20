import { AnimationAction, AnimationMixer, LoopOnce, Vector3 } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Bullet } from '@/src/first-person/components/Bullet';
import Camera from '@/src/setup/Camera';
import GUI from 'lil-gui';

export type AnimationName = 'fire' | 'reload' | 'idle' | 'walk';
export type FireMode = 'auto' | 'semi';
export type AnimationNameMap = Record<AnimationName, string>;

export abstract class Weapon {
  public abstract readonly bullet: Bullet;
  protected readonly shootAnimation: AnimationAction;
  protected readonly reloadAnimation: AnimationAction;
  protected readonly idleAnimation: AnimationAction;
  protected readonly walkAnimation: AnimationAction;
  protected readonly animationMixer: AnimationMixer;
  protected abstract weaponOffset: Vector3; // Offset of weapon from camera
  protected abstract weaponRotation: Vector3; // Rotation of weapon
  protected fireRate = 1000; // 1000ms delay between shots
  protected reloadTime = 3000; // 3000ms reload time
  protected magazineSize = 7; // 7 bullets per magazine by default
  protected bullets = 7; // Current bullets in magazine
  protected type: FireMode = 'semi';
  private lastShot = Date.now(); // Last shot timestamp
  private reloading = false; // Is reloading

  protected constructor(protected readonly weapon: GLTF, animationNames: AnimationNameMap) {
    this.animationMixer = new AnimationMixer(weapon.scene);

    this.shootAnimation = this.getAnimation(animationNames.fire);
    this.reloadAnimation = this.getAnimation(animationNames.reload);
    this.idleAnimation = this.getAnimation(animationNames.idle);
    this.walkAnimation = this.getAnimation(animationNames.walk);
  }

  get isSemiAutomatic(): boolean {
    return this.type === 'semi';
  }

  get isAutomatic(): boolean {
    return this.type === 'auto';
  }

  get effectiveDistance(): number {
    // Perhaps my grid helper is displaying the wrong distance
    // but this seems to work correctly when divided by 2
    // GridHelper block size seems to be equal to 2 🤨 ?
    return this.bullet.distance / 2;
  }

  hide(): void {
    this.weapon.scene.visible = false;
  }

  show(): void {
    this.weapon.scene.visible = true;
  }

  shoot(): boolean {
    if (this.reloading) return false;
    if (this.bullets <= 0) return this.reload();
    if (this.getShootDelta() < this.fireRate) return false;

    this.decrementBullets();
    this.updateDelta();

    this.resetAnimations();
    this.stopAnimations();

    this.shootAnimation.play();

    return true;
  }

  reload(): boolean {
    if (this.reloading) return false;
    if (this.bullets === this.magazineSize) return false;

    this.reloading = true;
    this.resetAnimations();
    this.stopAnimations();

    this.reloadAnimation.play();

    setTimeout(() => {
      this.bullets = this.magazineSize;
      this.reloading = false;
    }, this.reloadTime);

    return true;
  }

  update(delta: number): void {
    this.animationMixer.update(delta);
  }

  setBullets(bullets: number) {
    this.bullets = bullets;
  }

  setScale(scale: number) {
    this.weapon.scene.scale.set(scale, scale, scale);
  }

  setType(type: FireMode) {
    this.type = type;
  }

  setMagazineSize(magazineSize: number) {
    this.magazineSize = magazineSize;
  }

  setReloadTime(reloadTime: number) {
    this.reloadTime = reloadTime;
    this.reloadAnimation.setDuration(reloadTime / 1000);
    this.reloadAnimation.setLoop(LoopOnce, 1);
  }

  /**
   * Sets the fire rate of the weapon.
   *
   * It is a delay in millis. less is faster. more is slower.
   * @param fireRate
   */
  setFireRate(fireRate: number) {
    this.fireRate = fireRate;
    this.shootAnimation.setDuration(fireRate / 1000);
    this.shootAnimation.setLoop(LoopOnce, 1);
  }

  adjustBy(camera: Camera): void {
    const offset = this.weaponOffset.clone();
    // Calculate the offset of the weapon from the camera
    offset.applyQuaternion(camera.quaternion);

    // Update the weapon position based on the camera position and offset
    this.weapon.scene.position.copy(camera.position).add(offset);

    // Update the weapon rotation to match the camera rotation
    this.weapon.scene.rotation.copy(camera.rotation);

    // Transform the weapon as needed
    this.weapon.scene.rotateX(this.weaponRotation.x);
    this.weapon.scene.rotateY(this.weaponRotation.y);
    this.weapon.scene.rotateZ(this.weaponRotation.z);
  }

  protected addGui(gui: GUI): void {
    const properties = gui.addFolder('Properties');

    properties.add(this, 'fireRate', this.fireRate).step(1).name('fireRate (ms)').min(100).max(2000);
    properties.add(this, 'reloadTime', this.reloadTime).step(1).name('reloadTime (ms)').min(100).max(7500);
    properties.add(this, 'magazineSize', this.magazineSize).step(1).name('magazineSize').min(7).max(200);

    const offset = gui.addFolder('Offset');
    offset.add(this.weaponOffset, 'x', this.weaponOffset.x).step(0.01).min(-8).max(8);
    offset.add(this.weaponOffset, 'y', this.weaponOffset.y).step(0.01).min(-8).max(8);
    offset.add(this.weaponOffset, 'z', this.weaponOffset.z).step(0.01).min(-8).max(8);

    const rotation = gui.addFolder('Rotation');

    rotation.add(this.weaponRotation, 'x', this.weaponRotation.x).step(0.01).min(-Math.PI).max(7);
    rotation.add(this.weaponRotation, 'y', this.weaponRotation.y).step(0.01).min(-Math.PI).max(7);
    rotation.add(this.weaponRotation, 'z', this.weaponRotation.z).step(0.01).min(-Math.PI).max(7);

    const scale = gui.addFolder('Scale');
    scale.add(this.weapon.scene.scale, 'x', this.weapon.scene.scale.x).step(0.01).min(0.1).max(4);
    scale.add(this.weapon.scene.scale, 'y', this.weapon.scene.scale.y).step(0.01).min(0.1).max(4);
    scale.add(this.weapon.scene.scale, 'z', this.weapon.scene.scale.z).step(0.01).min(0.1).max(4);

    gui.close();
  }

  protected getShootDelta() {
    return Date.now() - this.lastShot;
  }

  private decrementBullets() {
    this.bullets--;
  }

  private updateDelta() {
    this.lastShot = Date.now();
  }

  private resetAnimations() {
    this.shootAnimation.reset();
    this.reloadAnimation.reset();
    this.idleAnimation.reset();
    this.walkAnimation.reset();
  }

  private stopAnimations() {
    this.shootAnimation.stop();
    this.reloadAnimation.stop();
    this.idleAnimation.stop();
    this.walkAnimation.stop();
  }

  private getAnimation(name: string): AnimationAction {
    const animation = this.weapon.animations.find((animation) => animation.name === name);
    if (!animation) throw new Error(`Animation "${name}" not found`);

    return this.animationMixer.clipAction(animation);
  }
}
