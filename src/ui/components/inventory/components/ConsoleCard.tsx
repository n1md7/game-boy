import { Image } from 'solid-bootstrap';
import { inventory } from '@/src/setup/store';
import { Show } from 'solid-js';

export default function ConsoleCard() {
  return (
    <Show
      when={inventory.gameBoy}
      fallback={
        <div class="row d-flex justify-content-center align-items-center h-100">
          <h3 class="gb-empty-state text-center">No Game Boy collected</h3>
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
