import { createEffect, createSignal, onCleanup, onMount, Show } from 'solid-js';
import { ref, state, mode, inventoryToggle, pause, resume, toggleMode } from '@/src/setup/store';
import { isPortrait, isTouchDevice } from '@/src/setup/utils/device';
import nipplejs from 'nipplejs';
import '@/src/ui/components/MobileControls.css';
import { controlEmitter, joystickState } from '@/src/setup/utils/controls';

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
  // Visual proof the joystick is registering input, independent of whether a
  // cartridge is loaded to actually act on it (sendKeyPress no-ops otherwise).
  const [moveDirection, setMoveDirection] = createSignal<'up' | 'down' | 'left' | 'right' | null>(null);
  const [rotateDirection, setRotateDirection] = createSignal<'left' | 'right' | null>(null);
  // Only tear down/rebuild the joysticks on resize when the orientation
  // actually flipped — a resize can also fire for unrelated reasons (e.g.
  // entering fullscreen), and destroying an in-progress touch mid-drag would
  // strand it (its 'move'/'end' events would target a destroyed collection).
  let lastPortrait = isPortrait();

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
    // nipplejs's event system calls listeners with a SINGLE argument,
    // `{type, target, data}` (see Super.trigger in nipplejs/src/Super.ts) —
    // NOT `(evt, data)`. The payload is `evt.data`, not a second parameter.
    // Getting this wrong throws "Cannot read properties of undefined" on
    // every single move event, which silently aborts the handler before
    // sendKeyPress ever runs — the joystick nub still visually tracks the
    // finger (that's driven entirely inside the library), but the character
    // never moves.
    joystick.on('move', (evt: any) => {
      // `vector` is {x, y} normalized to the joystick radius, with +x = right
      // and +y = up (nipplejs already flips the sign for y). Simpler and less
      // error-prone than reasoning about `angle.degree`, which nipplejs
      // rewrites in-place to `180 - rawAngle` before the 'move' event fires.
      const vector = evt.data.vector || { x: 0, y: 0 };
      // The very first move fires synchronously at touchdown with a zero
      // vector (before any real displacement) — ignore it rather than
      // tie-break it into a phantom direction.
      if (vector.x === 0 && vector.y === 0) return;

      let direction: 'up' | 'down' | 'left' | 'right';
      if (Math.abs(vector.x) > Math.abs(vector.y)) direction = vector.x > 0 ? 'right' : 'left';
      else direction = vector.y > 0 ? 'up' : 'down';

      setMoveDirection(direction);

      // Emulator path: send arrow keystrokes to the DOS game
      if (ref.cartridge?.game) {
        ref.cartridge.game.sendKeyPress(keyMap.up, false);
        ref.cartridge.game.sendKeyPress(keyMap.down, false);
        ref.cartridge.game.sendKeyPress(keyMap.left, false);
        ref.cartridge.game.sendKeyPress(keyMap.right, false);
        ref.cartridge.game.sendKeyPress(keyMap[direction], true);
      }

      // First-person path: emit arrow key codes so InputController updates
      // movement flags. InputController ignores these when mode === 'Emulator'.
      const codeMap = { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' } as const;
      (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] as const).forEach((code) => controlEmitter.emit('keyup', code));
      controlEmitter.emit('keydown', codeMap[direction]);
    });

    joystick.on('end', () => {
      setMoveDirection(null);

      // Emulator path: release all arrow keys
      if (ref.cartridge?.game) {
        ref.cartridge.game.sendKeyPress(keyMap.up, false);
        ref.cartridge.game.sendKeyPress(keyMap.down, false);
        ref.cartridge.game.sendKeyPress(keyMap.left, false);
        ref.cartridge.game.sendKeyPress(keyMap.right, false);
      }

      // First-person path: release all arrow keys
      (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'] as const).forEach((code) => controlEmitter.emit('keyup', code));
    });
  };

  const handleRotationJoystick = (joystick: any) => {
    joystick.on('move', (evt: any) => {
      // Left half of the zone = turn left, right half = turn right.
      const vector = evt.data.vector || { x: 0, y: 0 };
      if (vector.x === 0 && vector.y === 0) return;
      const direction = vector.x < 0 ? 'left' : 'right';

      setRotateDirection(direction);

      // Emulator path: send left/right arrow to the DOS game for turning
      if (ref.cartridge?.game) {
        ref.cartridge.game.sendKeyPress(keyMap.left, direction === 'left');
        ref.cartridge.game.sendKeyPress(keyMap.right, direction === 'right');
      }

      // First-person path: store normalized x/y so PlayerController can apply
      // continuous camera rotation each frame while the joystick is held.
      joystickState.rotationX = vector.x;
      joystickState.rotationY = vector.y;
    });

    joystick.on('end', () => {
      setRotateDirection(null);

      // Emulator path: release turning keys
      if (ref.cartridge?.game) {
        ref.cartridge.game.sendKeyPress(keyMap.left, false);
        ref.cartridge.game.sendKeyPress(keyMap.right, false);
      }

      // First-person path: stop rotating
      joystickState.rotationX = 0;
      joystickState.rotationY = 0;
    });
  };

  const destroyJoysticks = () => {
    activeJoysticksRef.forEach((js: any) => {
      if (js && typeof js.destroy === 'function') js.destroy();
    });
    activeJoysticksRef = [];
  };

  const setupControls = () => {
    lastPortrait = isPortrait();
    setPortrait(lastPortrait);
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

  const handleResize = () => {
    const nowPortrait = isPortrait();
    if (nowPortrait === lastPortrait) return;
    lastPortrait = nowPortrait;
    setupControls();
  };

  onMount(() => {
    window.addEventListener('orientationchange', setupControls);
    window.addEventListener('resize', handleResize);

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    onCleanup(() => {
      window.removeEventListener('orientationchange', setupControls);
      window.removeEventListener('resize', handleResize);
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
    controlEmitter.emit('keydown', 'Space');
  };

  const handleJumpEnd = () => {
    if (ref.cartridge?.game) ref.cartridge.game.sendKeyPress(keyMap.jump, false);
    controlEmitter.emit('keyup', 'Space');
  };

  const handleActionKeyPress = (keyCode: number, label: string) => {
    controlEmitter.emit('keydown', label);

    setTimeout(() => {
      controlEmitter.emit('keyup', label);
    }, 100);

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
                  onTouchStart={() => handleActionKeyPress(keyCode, label)}
                  onMouseDown={() => handleActionKeyPress(keyCode, label)}
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
        {/* Always visible during gameplay, so the user can confirm a touch
            registered even before they've dragged it anywhere. */}
        <div class="mobile-direction-hud">
          <span class="mobile-direction-hud__badge" classList={{ 'mobile-direction-hud__badge--active': !!moveDirection() }}>
            {moveDirection() ? `MOVE ${moveDirection()!.toUpperCase()}` : 'MOVE'}
          </span>
          <Show when={!portrait()}>
            <span
              class="mobile-direction-hud__badge"
              classList={{ 'mobile-direction-hud__badge--active': !!rotateDirection() }}
            >
              {rotateDirection() ? `TURN ${rotateDirection()!.toUpperCase()}` : 'TURN'}
            </span>
          </Show>
        </div>
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
              <div class="joystick-zone joystick-zone--left" ref={leftJoystickRef}></div>
              <div class="joystick-zone joystick-zone--right" ref={rightJoystickRef}></div>

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
