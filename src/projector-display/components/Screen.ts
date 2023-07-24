import { GenericScreen } from '@/src/abstract/GenericScreen';

export class Screen extends GenericScreen {
  private canvasElement: HTMLCanvasElement;
  private canvasContext: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super(width, height);

    this.canvasElement = document.createElement('canvas');
    this.canvasContext = this.canvasElement.getContext('2d')!;
  }

  override putImageData(imageData: ImageData) {
    const aspectRatio = imageData.height / imageData.width;
    const width = this.size.width * aspectRatio * 1.5;
    const height = this.size.height * aspectRatio * 1.5;
    const dy = (this.size.height - height) * 0.5;
    const dx = (this.size.width - width) * 0.5;

    // Create an Image object and set its src to a data URL representing the imageData
    const image = new Image();
    image.src = this.getImageDataUrl(imageData);

    // Wait for the image to load before drawing it on the canvas
    image.onload = () => {
      this.context.drawImage(image, dx, dy, width, height);
      this.needsUpdate();
    };
  }

  private getImageDataUrl(imageData: ImageData): string {
    this.canvasElement.width = imageData.width;
    this.canvasElement.height = imageData.height;
    this.canvasContext.putImageData(imageData, 0, 0);

    return this.canvasElement.toDataURL();
  }
}
