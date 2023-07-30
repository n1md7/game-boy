import { Vector2 } from 'three';
import { mode } from '@/src/setup/store';

export class MouseController extends EventTarget {
  public rotation = new Vector2();
  public sensitivity = 0.002;

  subscribe() {
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  }

  unsubscribe() {
    document.removeEventListener('mousemove', this.mouseMoveHandler.bind(this));
  }

  private mouseMoveHandler({ movementY, movementX }: MouseEvent) {
    // INFO: only updates camera rotation if pointer is locked
    if (document.pointerLockElement !== document.body) return;

    if (mode() === 'Emulator') return;

    this.rotation.x -= movementY * this.sensitivity;
    this.rotation.y -= movementX * this.sensitivity;
  }
}
