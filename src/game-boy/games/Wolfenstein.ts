import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Wolfenstein extends Game {
  public readonly name = Cartridges.Wolfenstein;
  public readonly description =
    'Wolfenstein 3D is a first-person shooter video game developed by id Software and published by Apogee Software.';
  public readonly tags = ['classic', 'retro', '1990s', '3d', 'shooter', 'hitler'];
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
