import { RigidBody } from '@/src/abstract/RigidBody';
import { BoxGeometry, MeshStandardMaterial, Texture } from 'three';

export class Box extends RigidBody {
  constructor(map: Texture) {
    super();

    this.geometry = new BoxGeometry(1, 1, 1);
    this.material = new MeshStandardMaterial({ map });
  }
}
