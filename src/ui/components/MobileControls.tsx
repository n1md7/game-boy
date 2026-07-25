import { createEffect, createSignal, onCleanup, onMount, Show } from 'solid-js';
import { ref, state, mode, inventoryToggle, pause, resume, toggleMode } from '@/src/setup/store';
import { isPortrait, isTouchDevice } from '@/src/setup/utils/device';
import nipplejs from 'nipplejs';
import '@/src/ui/components/MobileControls.css';

export default function MobileControls() {
  let portraitZoneRef: HTMLDivElement | undefined;
  let leftJoystickRef: HTMLDivElement | undefined;
  let rightJoystickRef: HTMLDivElement | undefined;
  let shootButtonRef: HTMLButtonElement | undefined;
  let jumpButtonRef: HTMLButtonElement | undefined;

  const [extraKeys, setExtraKeys] = createSignal<Array<{ key: string; label: string }>>([]);
  // Plain (non-reactive) bookkeeping: this is imperative nipplejs instance state,
  // never rendered. Using a signal here would make setupControls() track and
  // write the same signal from inside a createEffect, causing an infinite loop.
  let activeJoysticksRef: any[] = [];
  const [isFullscreen, setIsFullscreen] = createSignal(!!document.fullscreenElement);
  const [portrait, setPortrait] = createSignal(isPortrait());

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

  const destroyJoysticks = () => {
    activeJoysticksRef.forEach((js: any) => {
      if (js && typeof js.destroy === 'function') js.destroy();
    });
    activeJoysticksRef = [];
  };

  const setupControls = () => {
    setPortrait(isPortrait());
    destroyJoysticks();

    if (!isTouchDevice() || !state.started || state.isPaused) return;

    const activeJoysticks: any[] = [];

    if (isPortrait()) {
      // Portrait: single dynamic joystick, appears wherever the user first touches
      if (portraitZoneRef) {
        const joystick = createJoystick({
          zone: portraitZoneRef,
          color: 'blue',
          size: 120,
          multitouch: false,
          maxNumberOfNipples: 1,
          mode: 'dynamic',
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

    activeJoysticksRef = activeJoysticks;
  };

  // Re-run whenever the game starts/pauses, since Show unmounts/remounts the
  // zone elements and any joystick bound to the old nodes would be detached.
  createEffect(() => {
    state.started;
    state.isPaused;
    setupControls();
  });

  onMount(() => {
    window.addEventListener('orientationchange', setupControls);
    window.addEventListener('resize', setupControls);

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    onCleanup(() => {
      window.removeEventListener('orientationchange', setupControls);
      window.removeEventListener('resize', setupControls);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      destroyJoysticks();
    });
  });

  const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);

  const handleFullscreenToggle = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        if (screen.orientation && 'lock' in screen.orientation) {
          // Best-effort: only Android Chrome honors this, and only in fullscreen.
          await (screen.orientation as any).lock('landscape').catch(() => {});
        }
      } catch (error) {
        console.warn(error);
      }
    } else {
      await document.exitFullscreen().catch(() => {});
    }
  };

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
          {mode() === 'Emulator' ? 'MODE: EMU' : 'MODE: FP'}
        </button>
        <button class="toolbar-btn inventory-btn" onClick={inventoryToggle} title="Open inventory">
          INVENTORY
        </button>
        <button class="toolbar-btn pause-btn" onClick={handlePauseToggle} title="Pause or Resume">
          {state.isPaused ? 'RESUME' : 'PAUSE'}
        </button>
        <button
          class="toolbar-btn fullscreen-btn"
          onClick={handleFullscreenToggle}
          title="Toggle fullscreen (enables landscape lock on supported devices)"
        >
          {isFullscreen() ? 'EXIT FULL' : 'FULLSCREEN'}
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
        <Show when={portrait() && !isFullscreen()}>
          <div class="toolbar-hint">Rotate your device, or tap FULLSCREEN, for landscape play</div>
        </Show>
      </div>
      <Show when={!state.isPaused}>
        <div class="mobile-controls">
          {/* Portrait Mode */}
          <Show when={portrait()}>
            <div class="joystick-zone-portrait" ref={portraitZoneRef}></div>
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
          <Show when={!portrait()}>
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
