import { Screen } from '@/src/game-boy/components/Screen';
import { Game } from '@/src/game-boy/abstract/Game';
import { delay } from '@/src/setup/utils/common';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Box3, Group } from 'three';
import { Assets } from '@/src/assets';
import { ProjectorDisplay } from '@/src/projector-display/ProjectorDisplay';

export class GameBoy {
  public readonly screen: Screen;
  public readonly scene: Group;

  private cartridge?: Cartridge;

  constructor() {
    this.scene = new Group();
    this.scene.name = 'GameBoy';
    this.screen = new Screen(320, 200);
    this.screen.scene.position.set(0, 0.43, 0.2);

    this.scene.add(Assets.GameBoy.scene.clone(), this.screen.scene);
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

  static isGameBoy(object: any): object is GameBoy {
    return object instanceof GameBoy;
  }
}
