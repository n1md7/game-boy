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
