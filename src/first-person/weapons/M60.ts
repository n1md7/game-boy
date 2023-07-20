import { Weapon } from '@/src/first-person/weapons/Weapon';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Vector3 } from 'three';
import GUI from 'lil-gui';
import { Bullet } from '@/src/first-person/components/Bullet';

export class M60 extends Weapon {
  public readonly bullet = new Bullet({
    speed: 0.9,
    size: 7.62 / 1000, //7.62mm
    distance: 160,
    color: '#73fd02',
  });
  protected weaponOffset = new Vector3(0.7684, -0.29, -0.5);
  protected weaponRotation = new Vector3(0, Math.PI, 0);

  constructor(weapon: GLTF, gui: GUI) {
    super(weapon, {
      fire: 'ammo_skeleton|fire1',
      reload: 'ammo_skeleton|reload',
      idle: 'ammo_skeleton|idle',
      walk: 'ammo_skeleton|idle',
    });

    this.setScale(0.15);
    this.setFireRate(160);
    this.setReloadTime(3500);
    this.setMagazineSize(100);
    this.setBullets(34);
    this.setType('auto');

    this.addGui(gui);
  }
}
