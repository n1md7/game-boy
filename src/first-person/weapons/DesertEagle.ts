import { Bullet } from '@/src/first-person/components/Bullet';
import { Weapon } from '@/src/first-person/weapons/Weapon';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3 } from 'three';
import GUI from 'lil-gui';

export class DesertEagle extends Weapon {
  public readonly bullet = new Bullet({
    speed: 0.05,
    size: 12.7 / 1000, // 12.7mm, 1 block is equivalent to 1 meter, 1 block = 1 meter
    distance: 50,
    color: '#faed06',
  });
  protected weaponOffset = new Vector3(0.48, -0.16, -1.01);
  protected weaponRotation = new Vector3(0.061, 3.23, -0.02);

  constructor(weapon: GLTF, gui: GUI) {
    super(weapon, {
      fire: 'deagle_skeleton|shoot1',
      reload: 'deagle_skeleton|reload',
      idle: 'deagle_skeleton|idle1',
      walk: 'deagle_skeleton|idle1', // Missing dedicated animation
    });

    this.setScale(1.8);
    this.setFireRate(700);
    this.setReloadTime(1500);
    this.setMagazineSize(7);
    this.setBullets(7);
    this.setType('semi');

    this.addGui(gui);
  }
}
