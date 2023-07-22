import { Screen } from '@/src/game-boy/components/Screen';
import { Game } from '@/src/game-boy/abstract/Game';
import { Digger } from '@/src/game-boy/games/Digger';
import { Group } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Doom } from '@/src/game-boy/games/Doom';
import { Mario } from '@/src/game-boy/games/Mario';
import { Quake } from '@/src/game-boy/games/Quake';
import { delay } from '@/src/setup/utils/common';

export enum Cartridge {
  Digger = 'Digger',
  Doom = 'Doom',
  Mario = 'Mario',
  Quake = 'Quake',
}

type Games = Map<Cartridge, Game>;

export class GameBoy {
  public readonly screen: Screen;
  public readonly games: Games;
  public readonly scene: Group;

  private game?: Game;

  constructor(model: GLTF) {
    this.games = new Map();
    this.scene = new Group();
    this.screen = new Screen(320, 200);
    this.screen.position.set(0, 0.43, 0.2);

    this.scene.add(model.scene.clone(), this.screen);

    this.games.set(Cartridge.Digger, new Digger());
    this.games.set(Cartridge.Doom, new Doom());
    this.games.set(Cartridge.Mario, new Mario());
    this.games.set(Cartridge.Quake, new Quake());

    this.screen.write('Insert cartridge to play.');
  }

  async insertCartridge(gameName: Cartridge): Promise<Game> {
    this.screen.write('Loading...');
    // Unsubscribe from the previous game.
    this.game?.stop();
    // Current game after Cartridge inserted.
    this.game = this.games.get(gameName)!;
    // If the game loads too fast we still delay it for 3 second.
    // Just to keep it more realistic.
    await Promise.all([this.game.load(), delay(3000)]);

    // HDMI or TYPE-C both work.🙂
    this.game.connect(this.screen);
    await this.game.run();

    this.game.ci.mute();

    return this.game;
  }
}
