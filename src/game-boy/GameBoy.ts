import { Screen } from '@/src/game-boy/components/Screen';
import { Game } from '@/src/game-boy/abstract/Game';
import { delay } from '@/src/setup/utils/common';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { AmbientLight, Box3, Group, Vector3 } from 'three';
import { Assets } from '@/src/assets';
import { ProjectorDisplay } from '@/src/projector-display/ProjectorDisplay';
import { Camera } from '@/src/setup';

export class GameBoy {
  public readonly screen: Screen;
  public readonly scene: Group;

  public equipped = false;

  private readonly light: AmbientLight;
  private cartridge?: Cartridge;

  private readonly offsets: Vector3[] = [];
  private offsetIndex = 1;
  private readonly rotations: Vector3[] = [];
  private rotationIndex = 1;

  constructor() {
    this.scene = new Group();
    this.scene.name = 'GameBoy';
    this.screen = new Screen(320, 200);
    this.screen.scene.position.set(0, 0.43, 0.2);

    this.offsets.push(new Vector3(0.1652, -0.1298, -0.5231));
    this.offsets.push(new Vector3(1.1486, -0.3265, -1.8014));
    this.offsets.push(new Vector3(2.9184, -1.2114, -4.0));

    this.rotations.push(new Vector3(0, 0, 0));
    this.rotations.push(new Vector3(0, -0.8181, 0));
    this.rotations.push(new Vector3(-0.0315, -0.5231, -0.0315));

    this.light = new AmbientLight('#FFFFFF', 1);
    this.light.position.set(0, 0.5, 0.3);
    this.scene.add(Assets.GameBoy.scene.clone(), this.screen.scene, this.light);
    // No cartridge inserted, no game to play.
    this.screen.write('Insert cartridge to play.');
    this.scene.rotation.order = 'YXZ';
  }

  get mirrorMode() {
    return {
      showExternalDisplay: () => {
        this.screen.mirroringMode = 'External';
      },
      showBuiltInDisplay: () => {
        this.screen.mirroringMode = 'Built-in';
      },
      showBoth: () => {
        this.screen.mirroringMode = 'Mirror';
      },
    };
  }

  pause() {
    this.cartridge?.game?.ci?.pause?.();
  }

  resume() {
    this.cartridge?.game?.ci?.resume?.();
  }

  mute() {
    this.cartridge?.game?.ci?.mute?.();
  }

  unmute() {
    this.cartridge?.game?.ci?.unmute?.();
  }

  async insertCartridge(cartridge: Cartridge): Promise<Game> {
    if (this.cartridge) throw 'You need to remove the current cartridge first.';

    this.screen.write(`Initializing ${cartridge.name}...`);
    // Cartridge inserted, game is ready to play.
    this.cartridge = cartridge;
    // If the game loads too fast we still delay it for 3 seconds 😈.
    // Just to keep it more realistic.
    await Promise.all([this.cartridge.game.load(), delay(3000)]);

    // HDMI or TYPE-C both work here.🙂
    this.cartridge.game.connect(this.screen);
    // When frames are received, the builtInDisplay text is cleared.
    await this.cartridge.game.run();
    // this.cartridge.game.ci.mute();

    return this.cartridge.game;
  }

  removeCartridge() {
    this.cartridge?.game?.stop();
    this.screen.write('Insert cartridge to play.');
    this.cartridge = undefined;
  }

  connectExternalDisplay(projector: ProjectorDisplay) {
    this.screen.connectViaHDMI(projector.screen);
  }

  update(time: number) {
    if (this.scene.visible) {
      this.scene.position.setY(Math.sin(time) * 0.05 + 0.5);
      this.scene.rotation.y = time;
    }
  }

  toBox3() {
    return new Box3().setFromObject(this.scene);
  }

  adjustBy(camera: Camera) {
    const offset = this.offsets[this.offsetIndex].clone();
    const rotation = this.rotations[this.rotationIndex];
    // Calculate the offset of the Game Boy from the camera
    offset.applyQuaternion(camera.quaternion);

    // Update the Game Boy position based on the camera position and offset
    this.scene.position.copy(camera.position).add(offset);

    // Update the Game Boy rotation to match the camera rotation
    this.scene.rotation.copy(camera.rotation);

    this.scene.rotateX(rotation.x);
    this.scene.rotateY(rotation.y);
    this.scene.rotateZ(rotation.z);
  }

  changeCamera() {
    // Round-robin between the offsets
    this.offsetIndex = (this.offsetIndex + 1) % this.offsets.length;
    this.rotationIndex = (this.rotationIndex + 1) % this.rotations.length;
  }
}
