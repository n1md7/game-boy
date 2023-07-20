import { GUI } from 'lil-gui';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { AxesHelper, GridHelper, PointLight } from 'three';
import { Texture, RepeatWrapping } from 'three';
import { Scene as ThreeScene, Color, Fog, PointLightHelper } from 'three';
import { MeshStandardMaterial, Mesh, BoxGeometry } from 'three';
import { Ground } from '@/src/setup/scene/components/Ground';
import { Box } from '@/src/setup/scene/components/Box';
import { Target } from '@/src/setup/scene/components/Target';

export default class Scene extends ThreeScene {
  constructor(
    private readonly gui: GUI,
    private readonly world: Octree,
    private readonly width = 100,
    private readonly depth = 100
  ) {
    super();

    this.background = new Color('#1f1e1e');
  }

  addFog() {
    this.fog = new Fog('#0e0d0d', 0, 24);

    return this;
  }

  addAxisHelper() {
    this.add(new AxesHelper(20));

    return this;
  }

  addGridHelper() {
    this.add(new GridHelper(32, 32, 0x888888, 0x444444));

    return this;
  }

  addLight() {
    const light = new PointLight('#FFFFFF', 1, 100);
    light.castShadow = true;
    light.position.set(2.5, 7.5, 15);
    this.add(light, new PointLightHelper(light));

    const gui = this.gui.addFolder('Light');
    gui.add(light, 'intensity', 0, 20, 0.01);
    gui.addColor(light, 'color');
    gui.add(light, 'distance', 0, 100, 0.01);
    gui.add(light, 'decay', 0, 10, 0.01);
    gui.close();

    return this;
  }

  addGround(texture: Texture) {
    const ground = new Ground(texture, this.world, this.width, this.depth);
    this.add(ground);

    return this;
  }

  addSky(sky: GLTF) {
    sky.scene.scale.set(100, 100, 100);
    this.add(sky.scene);

    return this;
  }

  addBoxes(texture: Texture, count = 16) {
    const map = texture.clone();

    for (const _ of Array(count).keys()) {
      const box = new Box(map);
      box.position.set(Math.random() * this.width - this.width / 2, 0.5, Math.random() * this.depth - this.depth / 2);
      box.castShadow = true;
      box.receiveShadow = true;
      this.world.fromGraphNode(box);
      this.add(box);
    }

    return this;
  }

  addStairs(texture: Texture, count = 10) {
    const map = texture.clone();

    const width = 3;

    map.wrapS = RepeatWrapping;
    map.wrapT = RepeatWrapping;

    map.repeat.set(width, 1);

    const boxGeometry = new BoxGeometry(width, 1, 1);
    const boxMaterial = new MeshStandardMaterial({ map });

    for (let i = 0; i < count; i++) {
      const box = new Mesh(boxGeometry, boxMaterial);
      box.position.set(-this.width / 2 + 2, i * 0.5, -this.depth / 2 + 2 + i);
      box.castShadow = true;
      box.receiveShadow = true;
      this.world.fromGraphNode(box);
      this.add(box);
    }

    return this;
  }

  addShootingTarget(gltf: GLTF) {
    const target = new Target();
    target.position.set(0, -1, -32);
    target.scale.set(0.5, 0.5, 0.5);
    target.add(gltf.scene);
    this.add(target);

    return this;
  }
}
