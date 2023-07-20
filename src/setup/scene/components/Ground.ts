import { DoubleSide, Mesh, MeshStandardMaterial, PlaneGeometry, RepeatWrapping, Texture } from 'three';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { RigidBody } from '@/src/abstract/RigidBody';

export class Ground extends RigidBody {
  constructor(readonly texture: Texture, readonly world: Octree, readonly width = 100, readonly depth = 100) {
    super();

    this.texture = texture.clone();

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(this.width, this.depth);

    const ground = new Mesh(
      new PlaneGeometry(256, 256),
      new MeshStandardMaterial({
        map: texture,
        side: DoubleSide,
      })
    );
    ground.rotateX(-Math.PI / 2);
    ground.position.y = -0.01;
    ground.receiveShadow = true;

    this.add(ground);

    this.world.fromGraphNode(ground);
  }
}
