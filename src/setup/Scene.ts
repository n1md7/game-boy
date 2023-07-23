import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { AmbientLight, Group, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { Scene as ThreeScene, Color } from 'three';
import { applyGui, gui } from '@/src/setup/utils/gui';
import { Screen } from '@/src/game-boy/components/Screen';

export default class Scene extends ThreeScene {
  readonly light!: AmbientLight;
  readonly room = new Group();
  readonly projector = new Group();
  constructor(room: GLTF, projector: GLTF) {
    super();

    this.background = new Color('#1f1e1e');
    this.light = this.addLight();
    this.room = new Group();
    this.room.add(room.scene);
    room.scene.position.set(0, 0, 2);
    room.scene.scale.multiplyScalar(0.035);

    const wall = new Mesh(
      new PlaneGeometry(100, 100),
      new MeshBasicMaterial({
        color: 'rgba(152,151,151,0.69)',
      })
    );
    wall.position.set(131, 57.178, -11.926);
    wall.rotation.set(0, -Math.PI / 2, 0);
    wall.scale.set(2.111, 1.244, 0);

    this.projector.add(projector.scene);
    projector.scene.position.set(4.5, 2.025, 1.491);
    projector.scene.rotation.set(0, -Math.PI, 0);
    projector.scene.scale.multiplyScalar(0.45);

    const screen = new Screen(320, 200);
    screen.position.copy(projector.scene.position);

    applyGui(gui.addFolder('Screen'), screen);

    room.scene.add(this.projector);
    room.scene.add(wall);
    room.scene.add(screen);

    this.add(this.room, this.light);
  }

  private addLight() {
    const light = new AmbientLight('#FFFFFF', 1);
    light.position.set(-3, 3.0, 2);
    this.add(light);

    const dir = gui.addFolder('Light');
    dir.add(light, 'intensity', 0, 20, 0.01);
    dir.addColor(light, 'color');
    dir.close();

    return light;
  }
}
