import { CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

export abstract class GenericScreen {
  protected readonly context: CanvasRenderingContext2D;
  protected readonly canvas: HTMLCanvasElement;
  private readonly texture: CanvasTexture;
  private readonly mesh: Mesh;
  protected readonly background: Mesh;

  // Supported interfaces 😬
  private HDMI?: GenericScreen;
  private TypeC?: GenericScreen;

  protected constructor(width: number, height: number) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d')!;
    this.texture = new CanvasTexture(this.canvas);

    this.mesh = new Mesh();
    this.mesh.geometry = new PlaneGeometry(1, height / width);
    this.mesh.material = new MeshBasicMaterial({ map: this.texture });

    this.background = new Mesh(new PlaneGeometry(1, 0.764), new MeshBasicMaterial({ color: 0x000000 }));
    this.background.position.set(0, 0, -0.001);
    this.mesh.add(this.background);

    this.setTextFormat();
  }

  get scene(): Mesh {
    return this.mesh;
  }

  get size() {
    return {
      width: this.canvas.width,
      height: this.canvas.height,
    };
  }

  putImageData(imageData: ImageData) {
    const dx = this.size.width - imageData.width;
    const dy = this.size.height - imageData.height;
    this.context.putImageData(imageData, dx / 2, dy / 2);
    this.needsUpdate();

    if (this.HDMI) this.HDMI.putImageData(imageData);
    if (this.TypeC) this.TypeC.putImageData(imageData);
  }

  needsUpdate() {
    this.texture.needsUpdate = true;
  }

  write(text: string) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillText(text, this.size.width / 2, this.size.height / 2);
    this.needsUpdate();

    if (this.HDMI) this.HDMI.write(text);
    if (this.TypeC) this.TypeC.write(text);
  }

  connectViaHDMI(screen: GenericScreen) {
    this.HDMI = screen;
  }

  connectViaTypeC(screen: GenericScreen) {
    this.TypeC = screen;
  }

  protected setTextFormat(): void {
    this.context.font = '24px sans-serif';
    this.context.fillStyle = 'white';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
  }
}
