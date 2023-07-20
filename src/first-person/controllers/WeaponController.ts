import GUI from 'lil-gui';
import Camera from '@/src/setup/Camera';
import { Weapon } from '@/src/first-person/weapons/Weapon';
import { DesertEagle } from '@/src/first-person/weapons/DesertEagle';
import { Assets } from '@/src/first-person/Player';
import { PointLight, Scene } from 'three';
import { M60 } from '@/src/first-person/weapons/M60';
import { BulletController } from '@/src/first-person/controllers/BulletController';

export class WeaponController {
  // Weapon own 2nd scene
  public readonly scene: Scene;
  // Weapon own 2nd camera
  public readonly camera: Camera;
  public readonly backlight: PointLight;
  private readonly bulletController: BulletController;
  private readonly weapons: Weapon[];
  private weaponIndex: number;

  public triggerIsPressed = false;

  constructor(private readonly gui: GUI, assets: Assets, playerScene: Scene, playerCamera: Camera) {
    this.weapons = [
      new DesertEagle(assets.DesertEagle, gui.addFolder('Desert Eagle')),
      new M60(assets.M60, gui.addFolder('M60')),
    ];
    this.weaponIndex = 0;
    this.bulletController = new BulletController(playerScene, playerCamera);

    this.scene = new Scene();
    this.camera = new Camera(55, 65);
    this.backlight = this.createLight();

    // No need to add the camera to the scene
    this.scene.add(this.backlight);
    for (const asset of Object.values(assets)) {
      this.scene.add(asset.scene);
    }
    this.hideWeapons();
    this.weapon.show();
  }

  private get weapon() {
    return this.weapons[this.weaponIndex];
  }

  private get bullet() {
    return this.bulletController;
  }

  private hideWeapons() {
    for (const weapon of this.weapons) {
      weapon.hide();
    }
  }

  setWeapon(index: number) {
    if (!this.weapons[index]) return;
    this.weapon.hide();
    this.weaponIndex = index;
    this.weapon.show();
  }

  startShoot() {
    this.triggerIsPressed = true;
  }

  stopShoot() {
    this.triggerIsPressed = false;
  }

  private shoot() {
    if (this.weapon.shoot()) this.bullet.shoot(this.weapon);
    if (this.weapon.isSemiAutomatic) this.triggerIsPressed = false;
  }

  reload() {
    return this.weapon.reload();
  }

  adjustBy(camera: Camera): void {
    this.weapon.adjustBy(camera);
  }

  update(delta: number) {
    if (this.triggerIsPressed) this.shoot();
    this.weapon.update(delta);
    this.bullet.update(this.weapon);
  }

  private createLight() {
    const gui = this.gui.addFolder('Light');
    const light = new PointLight('#ffffff', 3);
    light.position.set(0, 10, 0);

    gui.add(light, 'distance', 0, 20, 0.01);
    gui.add(light, 'decay', 0, 20, 0.01);
    gui.add(light, 'intensity', 0, 20, 0.01);
    gui.addColor(light, 'color');
    gui.add(light.position, 'x', -10, 10, 0.01);
    gui.add(light.position, 'y', -10, 10, 0.01);
    gui.add(light.position, 'z', -10, 10, 0.01);
    gui.close();

    return light;
  }
}
