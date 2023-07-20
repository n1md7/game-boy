import { Weapon } from '@/src/first-person/weapons/Weapon';
import * as THREE from 'three';

type CreateType = {
  size: number;
  speed: number;
  color: number | string;
  damage: number;
  distance: number;
};
export class Bullet extends THREE.Mesh {
  readonly velocity = new THREE.Vector3();
  readonly shotFrom = new THREE.Vector3();
  // Size of the bullet, diameter (1 block is equivalent to 1 meter)
  readonly size: number = 0.1;
  // Speed of the bullet
  readonly speed: number = 0.1;
  // Color of the bullet
  readonly color: string | number = '#8b3030';
  // Damage the bullet does to an object
  readonly damage: number = 10;
  // Distance the bullet can travel before disappearing
  readonly distance: number = 10;

  constructor(options: Partial<CreateType>) {
    super();

    options.size && (this.size = options.size);
    options.speed && (this.speed = options.speed);
    options.color && (this.color = options.color);
    options.damage && (this.damage = options.damage);
    options.distance && (this.distance = options.distance);

    this.geometry = new THREE.SphereGeometry(this.size / 2, 8, 8);
    this.material = new THREE.MeshBasicMaterial({ color: this.color });
  }

  update() {
    this.position.add(this.velocity);
  }

  /** Calculates the distance between the bullet and the point of origin */
  get calculatedDistance() {
    return this.shotFrom.distanceTo(this.position);
  }

  /** Checks if the bullet is within an effective range */
  isEffective(weapon: Weapon) {
    return this.calculatedDistance <= weapon.effectiveDistance;
  }

  static from(bullet: Bullet) {
    return new Bullet(bullet);
  }
}
