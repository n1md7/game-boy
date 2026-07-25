import { createEffect, createSignal, onCleanup, onMount, Show } from 'solid-js';
import { ref, state, inventoryToggle, pause, resume, toggleMode } from '@/src/setup/store';
import nipplejs from 'nipplejs';
import '@/src/ui/components/MobileControls.css';

export default function MobileControls() {
  let containerRef: HTMLDivElement | undefined;
  let leftJoystickRef: HTMLDivElement | undefined;
  let rightJoystickRef: HTMLDivElement | undefined;
  let shootButtonRef: HTMLButtonElement | undefined;
  let jumpButtonRef: HTMLButtonElement | undefined;

  const [extraKeys, setExtraKeys] = createSignal<Array<{ key: string; label: string }>>([]);
  const [joysticks, setJoysticks] = createSignal<any[]>([]);

  const isPortrait = () => window.innerHeight > window.innerWidth;
  const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  createEffect(() => {
    if (ref.cartridge?.keys) {
      const keys = ref.cartridge.keys
        .filter(({ key }) => /^[0-9]$/.test(key) || key === 'Space' || key === 'Shift' || /weapon|select/i.test(key))
        .map(({ key, fn }) => ({ key, label: fn || key }));
      setExtraKeys(keys);
    }
  }, [ref.cartridge]);

  const keyMap = {
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    shoot: 17, // Ctrl
    jump: 32, // Space
  };

  const createJoystick = (options: any) => {
    return nipplejs.create(options);
  };

  const handleJoystickMove = (joystick: any) => {
    joystick.on('move', (_evt: any, data: any) => {
      if (!ref.cartridge?.game) return;

      const angle = data.angle?.degree || 0;

      // Reset all directions
      ref.cartridge.game.sendKeyPress(keyMap.up, false);
      ref.cartridge.game.sendKeyPress(keyMap.down, false);
      ref.cartridge.game.sendKeyPress(keyMap.left, false);
      ref.cartridge.game.sendKeyPress(keyMap.right, false);

      // Map angle to direction
      if (angle >= 315 || angle < 45) {
        // Right
        ref.cartridge.game.sendKeyPress(keyMap.right, true);
      } else if (angle >= 45 && angle < 135) {
        // Down
        ref.cartridge.game.sendKeyPress(keyMap.down, true);
      } else if (angle >= 135 && angle < 225) {
        // Left
        ref.cartridge.game.sendKeyPress(keyMap.left, true);
      } else if (angle >= 225 && angle < 315) {
        // Up
        ref.cartridge.game.sendKeyPress(keyMap.up, true);
      }
    });

    joystick.on('end', () => {
      if (!ref.cartridge?.game) return;
      // Release all keys
      ref.cartridge.game.sendKeyPress(keyMap.up, false);
      ref.cartridge.game.sendKeyPress(keyMap.down, false);
      ref.cartridge.game.sendKeyPress(keyMap.left, false);
      ref.cartridge.game.sendKeyPress(keyMap.right, false);
    });
  };

  const handleRotationJoystick = (joystick: any) => {
    joystick.on('move', (_evt: any, data: any) => {
      if (!ref.cartridge?.game) return;

      const angle = data.angle?.degree || 0;

      // Reset rotation
      ref.cartridge.game.sendKeyPress(keyMap.left, false);
      ref.cartridge.game.sendKeyPress(keyMap.right, false);

      // Left half = turn left, right half = turn right
      if (angle < 180) {
        ref.cartridge.game.sendKeyPress(keyMap.right, true);
        ref.cartridge.game.sendKeyPress(keyMap.left, false);
      } else {
        ref.cartridge.game.sendKeyPress(keyMap.left, true);
        ref.cartridge.game.sendKeyPress(keyMap.right, false);
      }
    });

    joystick.on('end', () => {
      if (!ref.cartridge?.game) return;
      ref.cartridge.game.sendKeyPress(keyMap.left, false);
      ref.cartridge.game.sendKeyPress(keyMap.right, false);
    });
  };

  onMount(() => {
    if (!isTouchDevice()) return;

    const setupControls = () => {
      // Clean up any existing joysticks
      joysticks().forEach((js: any) => {
        if (js && typeof js.destroy === 'function') {
          js.destroy();
        }
      });
      setJoysticks([]);

      const activeJoysticks: any[] = [];

      if (isPortrait()) {
        // Portrait: single joystick in center
        if (containerRef) {
          const joystick = createJoystick({
            zone: containerRef,
            color: 'blue',
            size: 120,
            multitouch: false,
            maxNumberOfNipples: 1,
            mode: 'dynamic',
            position: { top: '60%', left: '50%' },
            restOpacity: 0.5,
          });

          handleJoystickMove(joystick);
          activeJoysticks.push(joystick);
        }
      } else {
        // Landscape: left joystick for movement, right for rotation
        if (leftJoystickRef) {
          const leftJoystick = createJoystick({
            zone: leftJoystickRef,
            color: 'blue',
            size: 100,
            multitouch: false,
            maxNumberOfNipples: 1,
            mode: 'dynamic',
            restOpacity: 0.5,
          });

          handleJoystickMove(leftJoystick);
          activeJoysticks.push(leftJoystick);
        }

        if (rightJoystickRef) {
          const rightJoystick = createJoystick({
            zone: rightJoystickRef,
            color: 'red',
            size: 100,
            multitouch: false,
            maxNumberOfNipples: 1,
            mode: 'dynamic',
            restOpacity: 0.5,
          });

          handleRotationJoystick(rightJoystick);
          activeJoysticks.push(rightJoystick);
        }
      }

      setJoysticks(activeJoysticks);
    };

    setupControls();
    window.addEventListener('orientationchange', setupControls);
    window.addEventListener('resize', setupControls);

    onCleanup(() => {
      window.removeEventListener('orientationchange', setupControls);
      window.removeEventListener('resize', setupControls);
      joysticks().forEach((js: any) => {
        if (js && typeof js.destroy === 'function') {
          js.destroy();
        }
      });
    });
  });

  const handleShootStart = () => {
    if (ref.cartridge?.game) ref.cartridge.game.sendKeyPress(keyMap.shoot, true);
  };

  const handleShootEnd = () => {
    if (ref.cartridge?.game) ref.cartridge.game.sendKeyPress(keyMap.shoot, false);
  };

  const handleJumpStart = () => {
    if (ref.cartridge?.game) ref.cartridge.game.sendKeyPress(keyMap.jump, true);
  };

  const handleJumpEnd = () => {
    if (ref.cartridge?.game) ref.cartridge.game.sendKeyPress(keyMap.jump, false);
  };

  const handleActionKeyPress = (keyCode: number) => {
    if (ref.cartridge?.game) {
      ref.cartridge.game.sendKeyPress(keyCode, true);
      // Auto-release after 100ms for weapon selection
      setTimeout(() => {
        ref.cartridge?.game.sendKeyPress(keyCode, false);
      }, 100);
    }
  };

  const handlePauseToggle = () => {
    if (state.isPaused) {
      resume();
    } else {
      pause();
    }
  };

  return (
    <Show when={state.started && isTouchDevice()}>
      <div class="mobile-controls-toolbar">
        <button class="toolbar-btn mode-btn" onClick={toggleMode} title="Toggle between First Person and Emulator mode">
          MODE
        </button>
        <button class="toolbar-btn inventory-btn" onClick={inventoryToggle} title="Open inventory">
          INVENTORY
        </button>
        <button class="toolbar-btn pause-btn" onClick={handlePauseToggle} title="Pause or Resume">
          {state.isPaused ? 'RESUME' : 'PAUSE'}
        </button>
        <Show when={extraKeys().length > 0}>
          <div class="toolbar-actions">
            {extraKeys().map(({ key, label }) => {
              const keyCode = parseInt(key) || (key === 'Space' ? 32 : key === 'Shift' ? 16 : 0);
              return (
                <button
                  class="toolbar-btn action-btn"
                  onTouchStart={() => handleActionKeyPress(keyCode)}
                  onMouseDown={() => handleActionKeyPress(keyCode)}
                  title={label}
                >
                  {label.length > 3 ? key : label}
                </button>
              );
            })}
          </div>
        </Show>
      </div>
      <Show when={!state.isPaused}>
        <div class="mobile-controls" ref={containerRef}>
          {/* Portrait Mode */}
          <Show when={isPortrait()}>
            <div class="mobile-buttons portrait">
              <button
                ref={shootButtonRef}
                class="mobile-btn shoot-btn"
                onMouseDown={handleShootStart}
                onMouseUp={handleShootEnd}
                onTouchStart={handleShootStart}
                onTouchEnd={handleShootEnd}
              >
                SHOOT
              </button>
              <button
                ref={jumpButtonRef}
                class="mobile-btn jump-btn"
                onMouseDown={handleJumpStart}
                onMouseUp={handleJumpEnd}
                onTouchStart={handleJumpStart}
                onTouchEnd={handleJumpEnd}
              >
                JUMP
              </button>
            </div>
          </Show>

          {/* Landscape Mode */}
          <Show when={!isPortrait()}>
            <div class="joystick-container landscape">
              <div class="joystick-zone" ref={leftJoystickRef} style={{ left: '0', bottom: '0' }}></div>
              <div class="joystick-zone" ref={rightJoystickRef} style={{ right: '0', bottom: '0' }}></div>

              <div class="mobile-buttons landscape">
                <button
                  ref={shootButtonRef}
                  class="mobile-btn shoot-btn"
                  onMouseDown={handleShootStart}
                  onMouseUp={handleShootEnd}
                  onTouchStart={handleShootStart}
                  onTouchEnd={handleShootEnd}
                >
                  SHOOT
                </button>
                <button
                  ref={jumpButtonRef}
                  class="mobile-btn jump-btn"
                  onMouseDown={handleJumpStart}
                  onMouseUp={handleJumpEnd}
                  onTouchStart={handleJumpStart}
                  onTouchEnd={handleJumpEnd}
                >
                  JUMP
                </button>
              </div>
            </div>
          </Show>
        </div>
      </Show>
    </Show>
  );
}
