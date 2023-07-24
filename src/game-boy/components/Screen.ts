import { GenericScreen } from '@/src/abstract/GenericScreen';

export class Screen extends GenericScreen {
  constructor(width: number, height: number) {
    super(width, height);

    // Required to fill the Game Boy model screen-area as black color
    this.background.position.set(0, 0, -0.0001);
  }
}
