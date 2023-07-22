import { CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

export class Screen extends Mesh {
  private readonly texture: CanvasTexture;
  private readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;

  constructor(width: number, height: number) {
    super();

    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d')!;
    this.texture = new CanvasTexture(this.canvas);

    this.geometry = new PlaneGeometry(1, 0.764);
    this.material = new MeshBasicMaterial({ map: this.texture });
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
}
