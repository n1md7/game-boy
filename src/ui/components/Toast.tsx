import { For } from 'solid-js';
import { toasts } from '@/src/setup/store';

const CartridgeIcon = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="15" y="12" width="70" height="70" rx="4" />
    <rect x="25" y="20" width="50" height="35" />
    <line x1="30" y1="12" x2="30" y2="20" />
    <line x1="50" y1="12" x2="50" y2="20" />
    <line x1="70" y1="12" x2="70" y2="20" />
    <circle cx="50" cy="65" r="4" fill="currentColor" />
  </svg>
);

export default function Toast() {
  return (
    <div class="gb-toast-stack">
      <For each={toasts}>
        {(toast) => (
          <div class="gb-toast" classList={{ 'gb-toast--leaving': toast.leaving }}>
            <div class="gb-toast__icon">
              <CartridgeIcon />
            </div>
            <div class="gb-toast__body">
              <p class="gb-toast__eyebrow">Item Get!</p>
              <p class="gb-toast__title">{toast.title} cartridge</p>
              {toast.description ? <p class="gb-toast__desc">{toast.description}</p> : null}
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
