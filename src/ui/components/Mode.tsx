import { mode, ref, toggleMode } from '@/src/setup/store';
import { createEffect, createSignal, Show } from 'solid-js';
import { GameKey } from '@/src/game-boy/abstract/Game';
import { isTouchDevice } from '@/src/setup/utils/device';

export default function Mode() {
  const [keys, setKeys] = createSignal<GameKey[]>([]);

  createEffect(() => {
    ref.cartridge?.keys && setKeys(ref.cartridge.keys);
  }, [ref.cartridge]);

  return (
    <Show when={!isTouchDevice()}>
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
          <span>Mode:</span>
          <button
            class="gb-mode-button"
            onClick={toggleMode}
            style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'inherit', padding: 0 }}
          >
            <strong>{mode()}</strong>
          </button>
          <span>(Press M to change)</span>
        </div>
      </div>
    </Show>
  );
}
