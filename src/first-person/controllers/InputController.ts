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

  public get says() {
    return {
      move: {
        forward: this.moveForward,
        backward: this.moveBackward,
        left: this.moveLeft,
        right: this.moveRight,
        anyDirection: this.moveForward || this.moveBackward || this.moveLeft || this.moveRight,
      },
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
        this.dispatchEvent(new Event('flashlight:toggle'));
        break;
      case 'KeyR':
        this.dispatchEvent(new Event('weapon:reload'));
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
        this.dispatchEvent(
          new CustomEvent('weapon:switch', {
            detail: {
              weaponIndex: parseInt(event.code.slice(-1)) - 1,
            },
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
