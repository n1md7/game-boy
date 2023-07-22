import { Game } from '@/src/game-boy/abstract/Game';

export class Digger extends Game {
  protected readonly bundlePath = `${this.rootPath}/games/digger.jsdos`;

  constructor() {
    super();
  }
}
