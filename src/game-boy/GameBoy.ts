import { Screen } from '@/src/game-boy/components/Screen';
import { Game } from '@/src/game-boy/abstract/Game';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { delay } from '@/src/setup/utils/common';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Group } from 'three';

export class GameBoy {
  public readonly screen: Screen;
  public readonly scene: Group;

  private cartridge?: Cartridge;

  constructor(model: GLTF) {
    this.scene = new Group();
    this.screen = new Screen(320, 200);
    this.screen.position.set(0, 0.43, 0.2);

    this.scene.add(model.scene.clone(), this.screen);

    this.screen.write('Insert cartridge to play.');
  }

  async insertCartridge(cartridge: Cartridge): Promise<Game> {
    // Unsubscribe from the previous game.
    this.cartridge?.game?.stop();
    this.screen.write(`[${cartridge.name}] Loading...`);
    // Current game after Cartridge inserted.
    this.cartridge = cartridge;
    // If the game loads too fast we still delay it for 3 seconds 😈.
    // Just to keep it more realistic.
    await Promise.all([this.cartridge.game.load(), delay(3000)]);

    // HDMI or TYPE-C both work.🙂
    this.cartridge.game.connect(this.screen);
    await this.cartridge.game.run();

    // this.cartridge.game.ci.mute();

    return this.cartridge.game;
  }
}