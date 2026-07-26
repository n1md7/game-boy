import { Image } from 'solid-bootstrap';
import { inventory } from '@/src/setup/store';
import { Show } from 'solid-js';

const EmptyConsoleIcon = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    style={{ width: '80px', height: '80px', margin: '0 auto 20px', opacity: 0.5 }}
  >
    <rect x="15" y="10" width="70" height="75" rx="6" />
    <rect x="25" y="20" width="50" height="35" />
    <circle cx="30" cy="65" r="3" />
    <circle cx="50" cy="65" r="3" />
    <circle cx="70" cy="65" r="3" />
    <path d="M35 75h30" stroke-width="2" />
  </svg>
);

export default function ConsoleCard() {
  return (
    <Show
      when={inventory.gameBoy}
      fallback={
        <div class="gb-empty-console">
          <EmptyConsoleIcon />
          <h3 class="gb-empty-state">No Game Boy collected</h3>
          <p class="gb-empty-hint">Explore the room to find the Game Boy console!</p>
        </div>
      }
    >
      <div class="gb-console-card">
        <Image src="images/game-boy.png" class="gb-console-card__image" thumbnail />
        <div class="gb-console-card__body">
          <span class="gb-console-card__pill">Collected</span>
          <h5 class="gb-console-card__title">
            <strong>The Game Boye</strong>
          </h5>
          <p>
            The Game Boy is a popular handheld gaming console that was released by Nintendo in 1989. It is one of the most
            iconic and influential gaming devices in the history of video games. The Game Boy was designed by Gunpei Yokoi and
            his team at Nintendo.
          </p>
          <p class="mb-0">Choose a cartridge from the Cartridges tab to play the game.</p>
        </div>
      </div>
    </Show>
  );
}
