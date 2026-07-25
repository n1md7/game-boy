import { mode, ref } from '@/src/setup/store';
import { createEffect, createSignal, Show } from 'solid-js';
import { GameKey } from '@/src/game-boy/abstract/Game';

export default function Mode() {
  const [keys, setKeys] = createSignal<GameKey[]>([]);

  createEffect(() => {
    ref.cartridge?.keys && setKeys(ref.cartridge.keys);
  }, [ref.cartridge]);

  return (
    <div class="gb-hud">
      <Show when={keys().length > 0}>
        <div class="gb-hud__row gb-hud__keys">
          <span>Keys:</span>
          {keys().map(({ key, fn }) => (
            <span class="gb-hud__chip">
              <kbd>{key}</kbd> <span>{fn}</span>
            </span>
          ))}
        </div>
      </Show>
      <div class="gb-hud__row gb-hud__status">
        <span>Mode:</span> <strong>{mode()}</strong>
        <span>
          (Press <b>M</b> to change)
        </span>
      </div>
    </div>
  );
}
