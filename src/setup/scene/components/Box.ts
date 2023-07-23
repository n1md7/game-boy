import { BoxGeometry, Mesh, MeshStandardMaterial, Texture } from 'three';

export class Box extends Mesh {
  constructor(map: Texture) {
    super();

    this.geometry = new BoxGeometry(1, 1, 1);
    this.material = new MeshStandardMaterial({ map });
  }
}
