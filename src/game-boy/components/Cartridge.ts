import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';
import { SphereGeometry, AxesHelper, PointLight, Box3 } from 'three';
import { GridHelper, Group, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { gui } from '@/src/setup/utils/gui';

export abstract class Cartridge {
  static DEBUG = false;

  public readonly game: Game;
  public readonly name: Cartridges;
  public readonly image: Mesh;
  public readonly description: string;
  public readonly scene: Group;

  private readonly model: Group;
  private readonly sphere: Mesh;
  private readonly light: PointLight;

  protected constructor(model: GLTF, game: Game) {
    this.game = game;
    this.name = game.name;
    this.description = game.description;
    this.scene = new Group();

    // Setup 3d model of cartridge
    this.model = model.scene.clone();
    this.model.scale.multiplyScalar(2);
    this.model.position.set(0, -0.08, 0);

    // Setup outline sphere of cartridge
    this.sphere = new Mesh(
      new SphereGeometry(0.5, 32, 32),
      new MeshBasicMaterial({
        color: '#ffff00',
        transparent: true,
        opacity: 0.02,
      })
    );
    this.sphere.position.set(0, 0, 0);

    // Setup light of cartridge
    this.light = new PointLight(0xffffff, 0.35, 1, 1);
    this.light.position.set(0, 0.5, 0.3);
    this.light.lookAt(this.model.position);

    // Setup poster image of cartridge
    this.image = new Mesh(
      new PlaneGeometry(0.5, 0.5),
      new MeshBasicMaterial({
        map: game.image,
      })
    );
    this.image.scale.multiplyScalar(0.12);
    this.image.position.set(0, 0.03, 0.006);

    this.model.add(this.image);

    Cartridge.DEBUG && this.scene.add(new GridHelper(1, 10));
    Cartridge.DEBUG && this.scene.add(new AxesHelper(0.5));
    Cartridge.DEBUG && this.attachGui();

    this.scene.add(this.model, this.sphere, this.light);
  }

  private attachGui() {
    const posterGui = gui.addFolder(`${this.name} Poster`);
    posterGui.add(this.image.position, 'x', -0.5, 0.5, 0.001).name('PosX');
    posterGui.add(this.image.position, 'y', -0.5, 0.5, 0.001).name('PosY');
    posterGui.add(this.image.position, 'z', -0.5, 0.5, 0.001).name('PosZ');
    posterGui.add(this.image.rotation, 'x', -Math.PI, Math.PI, 0.01).name('RotX');
    posterGui.add(this.image.rotation, 'y', -Math.PI, Math.PI, 0.01).name('RotY');
    posterGui.add(this.image.rotation, 'z', -Math.PI, Math.PI, 0.01).name('RotZ');
    posterGui.add(this.image.scale, 'x', 0.1, 4, 0.01).name('ScaleX');
    posterGui.add(this.image.scale, 'y', 0.1, 4, 0.01).name('ScaleY');
    posterGui.add(this.image.scale, 'z', 0.1, 4, 0.01).name('ScaleZ');

    posterGui.close();
  }

  update(time: number) {
    this.model.position.setY(Math.sin(time) * 0.05 - 0.08);
    this.model.rotation.set(0, time, 0);
  }

  toBox3() {
    return new Box3().setFromObject(this.model);
  }
}
