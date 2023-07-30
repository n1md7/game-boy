import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Doom extends Game {
  public readonly name = Cartridges.Doom;
  public readonly description =
    'Doom is a 1993 first-person shooter developed by id Software for MS-DOS. ' +
    'Players assume the role of a space marine, popularly known as Doomguy, ' +
    'fighting his way through hordes of invading demons from Hell.';
  public readonly tags = ['fps', 'classic', 'retro', '1990s', '3d', 'shooter', 'aliens', 'horror'];
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
      key: 'CTRL/CMD',
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
  public readonly extraKeys = {
    '91': 17, // MetaLeft -> CTRL = Shoot (MacOS)
    '93': 17, // MetaRight -> CTRL = Shoot (MacOS)
  };
}
