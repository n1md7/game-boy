import { Screen } from '@/src/game-boy/components/Screen';
import { Game } from '@/src/game-boy/abstract/Game';
import { delay } from '@/src/setup/utils/common';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Group } from 'three';
import { applyGui, gui } from '@/src/setup/utils/gui';
import { Assets } from '@/src/assets';
import { ProjectorDisplay } from '@/src/projector-display/ProjectorDisplay';

export class GameBoy {
  public readonly builtInDisplay: Screen;
  public readonly scene: Group;

  private cartridge?: Cartridge;

  constructor() {
    this.scene = new Group();
    this.builtInDisplay = new Screen(320, 200);
    this.builtInDisplay.scene.position.set(0, 0.43, 0.2);

    this.scene.add(Assets.GameBoy.scene.clone(), this.builtInDisplay.scene);
    // No cartridge inserted, no game to play.
    this.builtInDisplay.write('Insert cartridge to play.');
    applyGui(gui.addFolder('GameBoy'), this.scene);
  }

  get screen() {
    return this.builtInDisplay;
  }

  async insertCartridge(cartridge: Cartridge): Promise<Game> {
    if (this.cartridge) throw 'You need to remove the current cartridge first.';

    this.builtInDisplay.write(`Initializing ${cartridge.name}...`);
    // Cartridge inserted, game is ready to play.
    this.cartridge = cartridge;
    // If the game loads too fast we still delay it for 3 seconds 😈.
    // Just to keep it more realistic.
    await Promise.all([this.cartridge.game.load(), delay(3000)]);

    // HDMI or TYPE-C both work here.🙂
    this.cartridge.game.connect(this.builtInDisplay);
    // When frames are received, the builtInDisplay text is cleared.
    await this.cartridge.game.run();

    this.cartridge.game.ci.mute();

    return this.cartridge.game;
  }

  removeCartridge() {
    this.cartridge?.game?.stop();
    this.builtInDisplay.write('Insert cartridge to play.');
    this.cartridge = undefined;
  }

  mirrorDisplayToProjector(projector: ProjectorDisplay) {
    this.builtInDisplay.connectViaHDMI(projector.screen);
  }
}
