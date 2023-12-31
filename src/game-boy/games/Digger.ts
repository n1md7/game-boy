import { Game } from '@/src/game-boy/abstract/Game';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';

export class Digger extends Game {
  public readonly name = Cartridges.Digger;
  public readonly description =
    'Digger is a computer game released by Canadian developer Windmill Software in 1983, ' +
    'popular in the era of the IBM PC and Commodore 64. ' +
    'It is similar in design to the 1982 arcade game Mr. Do!.';
  public readonly tags = ['arcade', 'classic', 'retro', '1980s', '2d'];
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
      key: 'ArrowUp',
      fn: 'Go up',
    },
    {
      key: 'ArrowDown',
      fn: 'Go down',
    },
    {
      key: 'Space',
      fn: 'Start/Pause',
    },
  ];
}
