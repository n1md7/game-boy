import { GenericScreen } from '@/src/abstract/GenericScreen';

export class Screen extends GenericScreen {
  constructor(width: number, height: number) {
    super(width, height);
  }

  override putImageData(imageData: ImageData) {
    const dx = this.size.width - imageData.width;
    const dy = this.size.height - imageData.height;

    // Stretch image
    this.context.scale(3, 3);

    this.context.putImageData(imageData, dx / 2, dy / 2);

    this.needsUpdate();
  }
}
