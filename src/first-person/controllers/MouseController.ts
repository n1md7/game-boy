import { Camera } from '@/src/setup';
import { FlashLight } from '@/src/first-person/components/FlashLight';

export class MouseController extends EventTarget {
  private readonly mouseSensitivity = 0.002;

  constructor(private readonly camera: Camera, private readonly flashlight: FlashLight) {
    super();
  }

  subscribe() {
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
    document.addEventListener('mousedown', this.mouseClickHandler.bind(this));
    document.addEventListener('mouseup', this.mouseReleaseHandler.bind(this));
  }

  unsubscribe() {
    document.removeEventListener('mousemove', this.mouseMoveHandler.bind(this));
    document.removeEventListener('click', this.mouseClickHandler.bind(this));
    document.removeEventListener('mouseup', this.mouseReleaseHandler.bind(this));
  }

  private mouseMoveHandler({ movementY, movementX }: MouseEvent) {
    // INFO: only updates camera rotation if pointer is locked
    if (document.pointerLockElement !== document.body) return;
    // INFO: movement(X|Y) are delta values
    this.camera.rotation.y -= movementX * this.mouseSensitivity;
    this.camera.rotation.x -= movementY * this.mouseSensitivity;

    // INFO: clamp camera rotation on X axis
    this.camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.camera.rotation.x));

    this.flashlight.adjustBy(this.camera);
  }

  private mouseClickHandler() {
    if (document.pointerLockElement !== null) {
      this.dispatchEvent(new Event('weapon:start-shoot'));
    }
  }

  private mouseReleaseHandler() {
    this.dispatchEvent(new Event('weapon:stop-shoot'));
  }
}
