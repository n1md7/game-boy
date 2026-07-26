import { inventory, mute, resume, show, unmute } from '@/src/setup/store';
import { Modal } from 'solid-bootstrap';
import { createEffect, createSignal, For, Show } from 'solid-js';

type ScreenType = 'built-in' | 'external' | 'mirror';
type Tab = 'display' | 'audio' | 'controls' | 'objective';

const DisplayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="4" width="20" height="13" rx="1" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const AudioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 9v6h4l5 5V4L8 9H4Z" />
    <path d="M17 8a5 5 0 0 1 0 8" />
  </svg>
);

const ControlsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="7" width="20" height="10" rx="4" />
    <path d="M7 10v4M5 12h4M16 11h.01M18.5 13h.01" />
  </svg>
);

const ObjectiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 3v18" />
    <path d="M5 4h11l-2 3.5L16 11H5" />
  </svg>
);

const NAV_ITEMS: { id: Tab; label: string; icon: () => any }[] = [
  { id: 'display', label: 'Display', icon: DisplayIcon },
  { id: 'audio', label: 'Audio', icon: AudioIcon },
  { id: 'controls', label: 'Controls', icon: ControlsIcon },
  { id: 'objective', label: 'Objective', icon: ObjectiveIcon },
];

export default function Menu() {
  const [option, setOption] = createSignal<ScreenType>('mirror');
  const [tab, setTab] = createSignal<Tab>('display');
  const [isMobile, setIsMobile] = createSignal(false);
  const handleClose = () => resume();
  const handleDisplayOption = (type: ScreenType) => () => setOption(type);

  createEffect(() => {
    if (option() === 'built-in') inventory.gameBoy?.mirrorMode.showBuiltInDisplay();
    else if (option() === 'external') inventory.gameBoy?.mirrorMode.showExternalDisplay();
    else inventory.gameBoy?.mirrorMode.showBoth();
  }, [option(), inventory]);

  createEffect(() => {
    // Detect touch devices (phones and tablets like iPad)
    const hasTouch = window.matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
    // Also check if viewport is narrower than desktop (includes tablets in portrait)
    const isNarrowViewport = window.innerWidth < 1024;
    setIsMobile(hasTouch || isNarrowViewport);
  });

  return (
    <Modal show={show.menu} onHide={handleClose} fullscreen={true} keyboard={false} contentClass="gb-panel">
      <Modal.Header class="justify-content-center" closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body class="gb-menu">
        <div class="gb-sidebar-layout">
          <nav class="gb-sidebar-nav">
            <For each={NAV_ITEMS}>
              {(item) => (
                <button
                  type="button"
                  class="gb-sidebar-nav__item"
                  classList={{ 'gb-sidebar-nav__item--active': tab() === item.id }}
                  onClick={() => setTab(item.id)}
                >
                  <span class="gb-sidebar-nav__icon">{item.icon()}</span>
                  {item.label}
                </button>
              )}
            </For>
          </nav>

          <div class="gb-sidebar-content">
            <Show when={tab() === 'display'}>
              <h4 class="gb-section-heading mb-3">Display Settings</h4>
              <div class="gb-segment-group" role="radiogroup" aria-label="Display Settings">
                <input
                  checked={option() === 'built-in'}
                  onClick={handleDisplayOption('built-in')}
                  class="gb-segment-input"
                  type="radio"
                  name="displayOption"
                  id="gameBoyDisplay"
                  value="gameBoy"
                />
                <label class="gb-segment" for="gameBoyDisplay">
                  Game Boy only
                </label>

                <input
                  checked={option() === 'external'}
                  onclick={handleDisplayOption('external')}
                  class="gb-segment-input"
                  type="radio"
                  name="displayOption"
                  id="projectorDisplay"
                  value="projector"
                />
                <label class="gb-segment" for="projectorDisplay">
                  Projector only
                </label>

                <input
                  checked={option() === 'mirror'}
                  onClick={handleDisplayOption('mirror')}
                  class="gb-segment-input"
                  type="radio"
                  name="displayOption"
                  id="mirrorDisplay"
                  value="mirror"
                />
                <label class="gb-segment" for="mirrorDisplay">
                  Mirror both
                </label>
              </div>
            </Show>

            <Show when={tab() === 'audio'}>
              <h4 class="gb-section-heading mb-3">Audio Settings</h4>
              <div class="gb-segment-group gb-segment-group--narrow" role="radiogroup" aria-label="Audio Settings">
                <input
                  class="gb-segment-input"
                  type="radio"
                  name="muteUnmuteRadio"
                  id="muteRadio"
                  value="mute"
                  checked={false}
                  onChange={mute}
                />
                <label class="gb-segment" for="muteRadio">
                  Mute
                </label>

                <input
                  class="gb-segment-input"
                  type="radio"
                  name="muteUnmuteRadio"
                  id="unmuteRadio"
                  value="unmute"
                  checked={true}
                  onChange={unmute}
                />
                <label class="gb-segment" for="unmuteRadio">
                  Unmute
                </label>
              </div>
            </Show>

            <Show when={tab() === 'controls'}>
              <h4 class="gb-section-heading mb-3">Controls</h4>

              <Show when={isMobile()}>
                <div class="gb-menu__controls-grid">
                  <div class="gb-menu__control-row gb-menu__control-row--wide">
                    <strong>First Person Mode (FP)</strong>
                  </div>
                  <div class="gb-menu__control-row">
                    <span>Use the joystick on the left to move around the world</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <span>Tap the JUMP button to jump</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <span>Tap the SHOOT button to interact</span>
                  </div>

                  <div class="gb-menu__control-row gb-menu__control-row--wide">
                    <strong>Emulator Mode (EMU)</strong>
                  </div>
                  <div class="gb-menu__control-row">
                    <span>Open your Inventory to select and insert a cartridge</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <span>Use the ENTER button to interact with the DOS game</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <span>Use the ESC button to close the DOS game</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <span>FP movement is disabled in Emulator mode</span>
                  </div>

                  <div class="gb-menu__control-row gb-menu__control-row--wide">
                    <strong>Mode Switching</strong>
                  </div>
                  <div class="gb-menu__control-row gb-menu__control-row--wide">
                    <span>Double-tap on the screen to switch between First Person and Emulator modes</span>
                  </div>
                </div>
              </Show>

              <Show when={!isMobile()}>
                <div class="gb-menu__controls-grid">
                  <div class="gb-menu__control-row">
                    <kbd>WASD</kbd> <span>to move</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <kbd>Shift</kbd> <span>to run</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <kbd>Space</kbd> <span>to jump</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <kbd>Tab</kbd> <span>to open Inventory menu</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <kbd>Esc</kbd> <span>to open Menu</span>
                  </div>
                  <div class="gb-menu__control-row">
                    <kbd>C</kbd> <span>to change the GameBoy camera mode</span>
                  </div>
                  <div class="gb-menu__control-row gb-menu__control-row--wide">
                    <kbd>M</kbd>{' '}
                    <span>to change modes between Emulator and First Person. In Emulator mode FPS movement is disabled.</span>
                  </div>
                </div>
              </Show>
            </Show>

            <Show when={tab() === 'objective'}>
              <h4 class="gb-section-heading mb-3">Game objective</h4>
              <div class="gb-menu__objective-box">
                <p>
                  Collect all the cartridges and insert them into the console. You can find them in the game world, but{' '}
                  <strong class="text-decoration-line-through">beware of the enemies!</strong>. No enemies yet 😔.
                </p>
                <p class="mb-0">
                  The game can be played with the GameBoy virtual device. It can be connected to the projector screen inside of
                  the virtual world as well.
                </p>
              </div>
            </Show>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
