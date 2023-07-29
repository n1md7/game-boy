import { inventoryToggle, pause } from '@/src/setup/store';

export class InputController extends EventTarget {
  private moveForward = false;
  private moveBackward = false;
  private moveLeft = false;
  private moveRight = false;

  private isShiftPressed = false;
  private isSpacePressed = false;

  subscribe() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
    document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  unsubscribe() {
    document.removeEventListener('keydown', this.onKeyDown.bind(this));
    document.removeEventListener('keyup', this.onKeyUp.bind(this));
  }

  public get actions() {
    return {
      goForward: this.moveForward,
      goBackward: this.moveBackward,
      goLeft: this.moveLeft,
      goRight: this.moveRight,
      sprint: this.isShiftPressed,
      jump: this.isSpacePressed,
    };
  }

  private onKeyDown(event: KeyboardEvent) {
    event.preventDefault();

    if (event.code === 'KeyW') this.moveForward = true;
    if (event.code === 'KeyS') this.moveBackward = true;
    if (event.code === 'KeyA') this.moveLeft = true;
    if (event.code === 'KeyD') this.moveRight = true;
    if (event.code === 'ArrowUp') this.moveForward = true;
    if (event.code === 'ArrowDown') this.moveBackward = true;
    if (event.code === 'ArrowLeft') this.moveLeft = true;
    if (event.code === 'ArrowRight') this.moveRight = true;
    if (event.code === 'ShiftLeft') this.isShiftPressed = true;
    if (event.code === 'Space') this.isSpacePressed = true;

    if (event.code === 'Tab') inventoryToggle();
    if (event.code === 'Escape') pause();
  }

  private onKeyUp(event: KeyboardEvent) {
    if (event.code === 'KeyW') this.moveForward = false;
    if (event.code === 'KeyS') this.moveBackward = false;
    if (event.code === 'KeyA') this.moveLeft = false;
    if (event.code === 'KeyD') this.moveRight = false;
    if (event.code === 'ArrowUp') this.moveForward = false;
    if (event.code === 'ArrowDown') this.moveBackward = false;
    if (event.code === 'ArrowLeft') this.moveLeft = false;
    if (event.code === 'ArrowRight') this.moveRight = false;
    if (event.code === 'ShiftLeft') this.isShiftPressed = false;
    if (event.code === 'Space') this.isSpacePressed = false;
  }
}
