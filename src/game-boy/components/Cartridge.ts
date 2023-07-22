import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';
import { GridHelper, Group, Mesh, MeshBasicMaterial, SphereGeometry, AxesHelper, PointLight } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Box3 } from 'three';
export abstract class Cartridge {
  static DEBUG = false;
  public readonly game: Game;
  public readonly name: Cartridges;
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

    this.model = model.scene.clone();
    this.model.scale.multiplyScalar(2);
    // Set the model position to the center of the scene.
    this.model.position.set(0, -0.08, 0);

    this.sphere = new Mesh(
      new SphereGeometry(0.5, 32, 32),
      new MeshBasicMaterial({
        color: '#ffff00',
        transparent: true,
        opacity: 0.02,
      })
    );
    this.sphere.position.set(0, 0, 0);

    this.light = new PointLight(0xffffff, 0.35, 1, 1);
    this.light.position.set(0, 0.5, 0.3);
    this.light.lookAt(this.model.position);

    Cartridge.DEBUG && this.scene.add(new GridHelper(1, 10));
    Cartridge.DEBUG && this.scene.add(new AxesHelper(0.5));

    this.scene.add(this.model, this.sphere, this.light);
  }

  update(time: number) {
    this.model.position.setY(Math.sin(time) * 0.05 - 0.08);
    this.model.rotation.set(0, time, 0);
  }

  toBox3() {
    return new Box3().setFromObject(this.model);
  }
}
