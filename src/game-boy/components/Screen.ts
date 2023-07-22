import { CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

export class Screen extends Mesh {
  private readonly texture: CanvasTexture;
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super();

    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d')!;
    this.texture = new CanvasTexture(this.canvas);

    this.geometry = new PlaneGeometry(1, 0.764);
    this.material = new MeshBasicMaterial({ map: this.texture });

    this.setTextFormat();
  }

  get size() {
    return {
      width: this.canvas.width,
      height: this.canvas.height,
    };
  }

  putImageData(imageData: ImageData, dx = 0, dy = 0) {
    this.context.putImageData(imageData, dx, dy);
  }

  needsUpdate() {
    this.texture.needsUpdate = true;
  }

  private setTextFormat(): void {
    this.context.font = '24px sans-serif';
    this.context.fillStyle = 'white';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
  }

  write(text: string) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillText(text, this.size.width / 2, this.size.height / 2);
    this.needsUpdate();
  }
}
