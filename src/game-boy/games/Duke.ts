import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Duke extends Game {
  public readonly name = Cartridges.Duke;
  public readonly description = 'Duke Nukem 3D is a first-person shooter video game developed by 3D Realms.';
  public readonly tags = ['fps', 'classic', 'retro', '1990s', '3d', 'shooter', 'aliens'];
}
