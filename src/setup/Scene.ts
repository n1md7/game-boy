import { GUI } from 'lil-gui';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { AxesHelper, GridHelper, RectAreaLight } from 'three';
import { Texture } from 'three';
import { Scene as ThreeScene, Color, Fog } from 'three';
import { Ground } from '@/src/setup/scene/components/Ground';
import { Box } from '@/src/setup/scene/components/Box';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

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
    const light = new RectAreaLight('#FFFFFF', 3, 2, 2);
    light.position.set(0, 3.5, 2);
    this.add(light, new RectAreaLightHelper(light, 0xffffff));
    light.lookAt(0, 0, 0);

    const gui = this.gui.addFolder('Light');
    gui.add(light, 'intensity', 0, 20, 0.01);
    gui.addColor(light, 'color');
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
}
