import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Quake extends Game {
  public readonly name = Cartridges.Quake;
  public readonly description =
    'Quake is a first-person shooter video ' +
    'game developed by id Software and published by GT Interactive in 1996. ' +
    'It is the first game in the Quake series.';
  public readonly tags = ['fps', 'classic', 'retro', '1990s', '3d', 'sci-fi', 'horror', 'aliens', 'shooter'];
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
      fn: 'Jump',
    },
    {
      key: '1-9',
      fn: 'Select weapon',
    },
  ];
  public readonly extraKeys = {
    '38': 87, // ArrowUp -> KeyW = Go forward
    '91': 17, // MetaLeft -> CTRL = Shoot (MacOS)
    '93': 17, // MetaRight -> CTRL = Shoot (MacOS)
  };
}
