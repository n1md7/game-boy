import { GenericScreen } from '@/src/abstract/GenericScreen';

export class Screen extends GenericScreen {
  constructor(width: number, height: number) {
    super(width, height);
  }

  override putImageData(imageData: ImageData) {
    super.putImageData(imageData);
  }
}
