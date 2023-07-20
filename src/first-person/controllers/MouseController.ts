import { Camera } from '@/src/setup';

export class MouseController extends EventTarget {
  private readonly mouseSensitivity = 0.002;

  constructor(private readonly camera: Camera) {
    super();
  }

  subscribe() {
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  }

  unsubscribe() {
    document.removeEventListener('mousemove', this.mouseMoveHandler.bind(this));
  }

  private mouseMoveHandler({ movementY, movementX }: MouseEvent) {
    this.camera.rotation.y -= movementX * this.mouseSensitivity;
    this.camera.rotation.x -= movementY * this.mouseSensitivity;

    // INFO: clamp camera rotation on X axis
    this.camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.camera.rotation.x));
  }
}
