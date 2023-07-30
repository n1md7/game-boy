import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Mario extends Game {
  public readonly name = Cartridges.Mario;
  public readonly description =
    'Mario is a fictional character in the Mario video game franchise, ' +
    'owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. ' +
    "Serving as the company's mascot and the eponymous protagonist of the series, " +
    'Mario has appeared in over 200 video games since his creation.';
  public readonly tags = ['platformer', 'classic', 'retro', '1980s', '2d'];
  public readonly keys = [
    {
      key: 'ArrowLeft',
      fn: 'Go left',
    },
    {
      key: 'ArrowRight',
      fn: 'Go right',
    },
    {
      key: 'CTRL/SHIFT',
      fn: 'Run',
    },
    {
      key: 'Z',
      fn: 'Fire',
    },
    {
      key: 'ALT/Space/X',
      fn: 'Jump',
    },
  ];
  public readonly extraKeys = {
    '32': 18, // ALT -> Space = Jump
    '88': 18, // X -> ALT = Jump
    '90': 32, // Z -> Space = Fire
    '16': 17, // SHIFT -> CTRL = Run
  };
}
