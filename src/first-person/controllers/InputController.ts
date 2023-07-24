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
    switch (event.code) {
      case 'KeyW':
        this.moveForward = true;
        break;
      case 'KeyS':
        this.moveBackward = true;
        break;
      case 'KeyA':
        this.moveLeft = true;
        break;
      case 'KeyD':
        this.moveRight = true;
        break;
      case 'ShiftLeft':
        this.isShiftPressed = true;
        break;
      case 'KeyF':
        this.dispatchEvent(new Event('KeyF:pressed'));
        break;
      case 'KeyEscape':
        this.dispatchEvent(new Event('ESC:pressed'));
        break;
      case 'Space':
        this.isSpacePressed = true;
        break;
      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
      case 'Digit6':
      case 'Digit7':
      case 'Digit8':
      case 'Digit9':
      case 'Digit0':
        this.dispatchEvent(
          new CustomEvent('Digit:pressed', {
            detail: parseInt(event.code.slice(-1)),
          })
        );
        break;
    }
  }

  private onKeyUp(event: KeyboardEvent) {
    switch (event.code) {
      case 'KeyW':
        this.moveForward = false;
        break;
      case 'KeyS':
        this.moveBackward = false;
        break;
      case 'KeyA':
        this.moveLeft = false;
        break;
      case 'KeyD':
        this.moveRight = false;
        break;
      case 'ShiftLeft':
        this.isShiftPressed = false;
        break;
      case 'Space':
        this.isSpacePressed = false;
        break;
    }
  }
}
