import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import {
  AmbientLight,
  AxesHelper,
  CylinderGeometry,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
} from 'three';
import { Scene as ThreeScene, Color } from 'three';
import { applyGui, gui } from '@/src/setup/utils/gui';
import { ProjectorDisplay } from '@/src/projector-display/ProjectorDisplay';
import { Assets } from '@/src/assets';

export default class Scene extends ThreeScene {
  readonly light!: AmbientLight;
  readonly room = new Group();
  readonly projectorScreen = new ProjectorDisplay();
  constructor(room: GLTF) {
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

    room.scene.add(this.projectorScreen.scene);
    room.scene.add(wall);

    const projector = Assets.ProjectorDevice.scene.clone();
    projector.position.set(26, 80, -15.397);
    projector.rotation.set(0, Math.PI * 0.5, 0);
    projector.scale.multiplyScalar(2);
    projector.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = new MeshStandardMaterial({ map: Assets.Duke });
      }
    });
    room.scene.add(projector);
    const projectorLightHelper = new Mesh(
      new CylinderGeometry(0.5, 6, 16, 4, 10),
      new MeshBasicMaterial({
        color: '#FFFFFF',
        transparent: true,
        wireframe: false,
        opacity: 0.02,
      })
    );
    projectorLightHelper.position.set(92, 73, -15.397);
    projectorLightHelper.rotation.set(Math.PI * 0.25, -0.148, 1.415);
    projectorLightHelper.scale.multiplyScalar(7.5);
    applyGui(gui.addFolder('Projector Light'), projectorLightHelper);
    room.scene.add(projectorLightHelper);

    this.room.add(new AxesHelper(200));

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
