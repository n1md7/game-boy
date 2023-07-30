import { mode, ref } from '@/src/setup/store';
import { createEffect, createSignal, Show } from 'solid-js';
import { GameKey } from '@/src/game-boy/abstract/Game';

export default function Mode() {
  const [keys, setKeys] = createSignal<GameKey[]>([]);

  createEffect(() => {
    ref.cartridge?.keys && setKeys(ref.cartridge.keys);
  }, [ref.cartridge]);

  return (
    <div class="row position-fixed top-0 w-100">
      <Show when={keys().length > 0}>
        <div class="col-12 d-flex justify-content-center text-center gap-2 small">
          <span>Keys: </span>
          {keys().map(({ key, fn }) => (
            <>
              <span>
                <kbd>{key}</kbd> - <span>{fn}</span>;
              </span>
            </>
          ))}
        </div>
      </Show>
      <div class="col-12 d-flex justify-content-center text-center gap-2">
        <span>Mode: </span> <strong> {mode()}</strong>{' '}
        <span>
          {' '}
          (Press <b>M</b> to change){' '}
        </span>
      </div>
    </div>
  );
}
