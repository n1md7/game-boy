import { Screen } from '@/src/game-boy/components/Screen';
import { Game } from '@/src/game-boy/abstract/Game';
import { Digger } from '@/src/game-boy/games/Digger';
import { Group } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export enum Cartridge {
  Digger = 'Digger',
}

type Games = Map<Cartridge, Game>;

export class GameBoy {
  public readonly screen: Screen;
  public readonly games: Games;
  public readonly scene: Group;

  private currentGame?: Game;

  constructor(model: GLTF) {
    this.games = new Map();
    this.scene = new Group();
    this.screen = new Screen(320, 200);
    this.screen.position.set(0, 0.43, 0.2);

    this.scene.add(model.scene.clone(), this.screen);
    this.games.set(Cartridge.Digger, new Digger());
  }

  getCurrentGame(): Game | undefined {
    return this.currentGame;
  }

  insertCartridge(gameName: Cartridge): Game {
    // Make sure we unsubscribe from the previous game.
    this.currentGame?.stop();
    this.currentGame = this.games.get(gameName)!;
    // HDMI or TYPE-C both work.🙂
    this.currentGame.connect(this.screen);

    return this.currentGame;
  }

  async runGame(): Promise<void> {
    await this.currentGame?.run();
  }
}
