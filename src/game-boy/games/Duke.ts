import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Duke extends Game {
  public readonly name = Cartridges.Duke;
  public readonly description = 'Duke Nukem 3D is a first-person shooter video game developed by 3D Realms.';
  public readonly tags = ['fps', 'classic', 'retro', '1990s', '3d', 'shooter', 'aliens'];
  public readonly keys = [
    {
      key: 'ArrowUp',
      fn: 'Forward',
    },
    {
      key: 'ArrowDown',
      fn: 'Backward',
    },
    {
      key: 'ArrowLeft',
      fn: 'Turn left',
    },
    {
      key: 'ArrowRight',
      fn: 'Turn right',
    },
    {
      key: 'CTRL',
      fn: 'Fire',
    },
    {
      key: 'Shift',
      fn: 'Run',
    },
    {
      key: 'Space',
      fn: 'Open door',
    },
    {
      key: '1-9',
      fn: 'Select weapon',
    },
  ];
}
