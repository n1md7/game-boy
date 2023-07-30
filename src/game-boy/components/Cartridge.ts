import { Game, GameKey } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';
import { SphereGeometry, AxesHelper, Box3, ShaderMaterial, Texture } from 'three';
import { GridHelper, Group, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { applyGui, gui } from '@/src/setup/utils/gui';
import vertexShader from '@/src/game-boy/components/shaders/sphere/vertexShader.glsl';
import fragmentShader from '@/src/game-boy/components/shaders/sphere/fragmentShader.glsl';

export abstract class Cartridge extends Group {
  static DEBUG = false;

  public readonly game: Game;
  public readonly name: Cartridges;
  public readonly image: Mesh;
  public readonly thumbnail: Texture;
  public readonly description: string;
  public readonly scene: Group;
  public readonly tags: string[] = [];
  public readonly keys: GameKey[] = [];

  private readonly model: Group;
  private readonly sphere: Mesh;
  private readonly material: ShaderMaterial;

  protected constructor(model: GLTF, game: Game) {
    super();

    this.game = game;
    this.name = game.name;
    this.tags = game.tags;
    this.keys = game.keys;
    this.thumbnail = game.image;
    this.description = game.description;
    this.scene = new Group();
    this.scene.name = 'Cartridge';

    // Setup 3d model of cartridge
    this.model = model.scene.clone();
    this.model.scale.multiplyScalar(2);
    this.model.position.set(0, -0.08, 0);
    this.model.rotation.set(0, (Math.random() - 0.5) * Math.PI, 0);

    this.material = new ShaderMaterial({
      uniforms: {
        time: { value: 1.0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      opacity: 0.1,
    });

    // Setup outline sphere of cartridge
    this.sphere = new Mesh(new SphereGeometry(0.5, 32, 32), this.material);
    this.sphere.position.set(0, 0, 0);

    // Setup light of cartridge
    // this.light = new PointLight(0xffffff, 0.35, 1, 1);
    // this.light.position.set(0, 0.5, 0.3);
    // this.light.lookAt(this.model.position);
    // this.scene.add(this.light);

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

    this.scene.add(this.model, this.sphere);
  }

  private attachGui() {
    const cartridge = gui.addFolder(`${this.name} Cartridge`);
    const group = cartridge.addFolder(`Group`);
    const model = group.addFolder(`Model`);
    const image = group.addFolder(`Image`);
    applyGui(group, this.scene);
    applyGui(model, this.model);
    applyGui(image, this.image);
  }

  update(time: number) {
    this.model.position.setY(Math.sin(time) * 0.05 - 0.08);
    this.model.rotation.set(0, time, 0);
    this.material.uniforms.time.value = time;
  }

  toBox3() {
    return new Box3().setFromObject(this.model);
  }
}
