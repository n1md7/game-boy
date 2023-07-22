import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Mario extends Game {
  public readonly name = Cartridges.Mario;
  public readonly description =
    'Mario is a fictional character in the Mario video game franchise, ' +
    'owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. ' +
    "Serving as the company's mascot and the eponymous protagonist of the series, " +
    'Mario has appeared in over 200 video games since his creation.';
}
