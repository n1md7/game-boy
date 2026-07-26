import { TinyEmitter } from 'tiny-emitter';

type Fn = (event: KeyboardEvent) => void;
type Events = 'keydown' | 'keyup';

export const controlEmitter = new (class extends TinyEmitter {
  override on(event: Events, fn: Fn, ctx?: any): this {
    return super.on(event, fn, ctx);
  }

  override emit(event: Events, code: string): this {
    return super.emit(event, {
      code,
      preventDefault() {},
    } as unknown as KeyboardEvent);
  }
})();

// Joystick rotation state (-1 to 1). Set by MobileControls, read each frame
// by PlayerController to drive continuous camera rotation in first-person.
export const joystickState = {
  rotationX: 0, // horizontal: negative = turn left, positive = turn right
  rotationY: 0, // vertical: negative = look down, positive = look up
};
