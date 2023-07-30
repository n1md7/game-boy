import { CanvasTexture, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

type MirroringMode = 'Built-in' | 'Mirror' | 'External';

export abstract class GenericScreen {
  protected readonly context: CanvasRenderingContext2D;
  protected readonly canvas: HTMLCanvasElement;
  private readonly texture: CanvasTexture;
  private readonly mesh: Mesh;

  // Supported interfaces 😬
  private HDMI?: GenericScreen;
  private TypeC?: GenericScreen;

  private mirroring: MirroringMode = 'Built-in';
  private fullscreen = {
    canvas: null as HTMLCanvasElement | null,
    context: null as CanvasRenderingContext2D | null,
  };

  protected constructor(width: number, height: number) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d')!;
    this.texture = new CanvasTexture(this.canvas);

    this.mesh = new Mesh();
    this.mesh.name = 'GenericScreen';
    this.mesh.geometry = new PlaneGeometry(1, height / width);
    this.mesh.material = new MeshBasicMaterial({ map: this.texture });

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

  set mirroringMode(mode: MirroringMode) {
    this.mirroring = mode;
  }

  putImageData(imageData: ImageData) {
    if (this.fullscreen.canvas) {
      return this.fullscreen.context!.putImageData(imageData, 0, 0);
    }

    if (['Mirror', 'Built-in'].includes(this.mirroring)) {
      const dx = (this.size.width - imageData.width) / 2;
      const dy = (this.size.height - imageData.height) / 2;
      this.context.putImageData(imageData, dx, dy);
      this.needsUpdate();
    }

    if (this.mirroring === 'Built-in') {
      if (this.HDMI) this.HDMI.displayNoSignal();
      if (this.TypeC) this.TypeC.displayNoSignal();
      return;
    }

    if (this.HDMI) this.HDMI.putImageData(imageData);
    if (this.TypeC) this.TypeC.putImageData(imageData);
  }

  needsUpdate() {
    this.texture.needsUpdate = true;
  }

  write(text: string) {
    if (['Mirror', 'Built-in'].includes(this.mirroring)) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillText(text, this.size.width / 2, this.size.height / 2);
      this.needsUpdate();
    }

    if (this.mirroring === 'Built-in') {
      if (this.HDMI) this.HDMI.displayNoSignal();
      if (this.TypeC) this.TypeC.displayNoSignal();
      return;
    }

    if (this.HDMI) this.HDMI.write(text);
    if (this.TypeC) this.TypeC.write(text);
  }

  connectViaHDMI(screen: GenericScreen) {
    this.HDMI = screen;
  }

  connectViaTypeC(screen: GenericScreen) {
    this.TypeC = screen;
  }

  displayNoSignal() {
    this.write('No Signal! Please check your connection.');
  }

  requestFullscreen() {
    this.fullscreen.canvas = document.createElement('canvas')!;
    this.fullscreen.context = this.fullscreen.canvas.getContext('2d')!;
    document.body.appendChild(this.fullscreen.canvas);
    this.fullscreen.canvas.requestFullscreen().then(() => {
      this.fullscreen.canvas!.onfullscreenchange = () => {
        if (!document.fullscreenElement) {
          this.fullscreen.canvas?.remove();
          this.fullscreen.canvas = null;
          this.fullscreen.context = null;
        }
      };
    });
    this.fullscreen.canvas.ondblclick = null;
    this.fullscreen.canvas.ondblclick = () => {
      this.fullscreen.canvas!.requestPointerLock();
    };
  }

  protected setTextFormat(): void {
    this.context.font = '24px sans-serif';
    this.context.fillStyle = 'white';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
  }
}
