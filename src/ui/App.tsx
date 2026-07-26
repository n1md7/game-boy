import '@/src/styles/theme.css';
import '@/src/styles/style.css';

import type { Component } from 'solid-js';
import { createEffect, createSignal, onMount, Show } from 'solid-js';
import { manager } from '@/src/setup/utils/Loader';
import { delay } from '@/src/setup/utils/common';
import { AssetsLoaded, extractAssets } from '@/src/assets';
import { setup } from '@/src/main';
import { ref, state } from '@/src/setup/store';
import { isTouchDevice } from '@/src/setup/utils/device';
import Inventory from '@/src/ui/components/inventory/Inventory';
import Menu from '@/src/ui/components/menu/Menu';
import Dialog from '@/src/ui/components/Dialog';
import Mode from '@/src/ui/components/Mode';
import MobileControls from '@/src/ui/components/MobileControls';

const App: Component = () => {
  const [progress, setProgress] = createSignal(0.0);
  const [finished, setFinished] = createSignal(false);
  const [startClicked, setStartClicked] = createSignal(false);

  const handleStart = () => {
    // Must run synchronously inside the click handler — user activation for
    // requestFullscreen is lost once we cross the `delay(100)` in the effect
    // below. Fullscreen on `document.body` (not documentElement) to match
    // the element PlayerController.pointerLock() locks the pointer on.
    document.body
      .requestFullscreen?.()
      .then(() => {
        if (isTouchDevice() && screen.orientation && 'lock' in screen.orientation) {
          (screen.orientation as any).lock('landscape').catch(() => {});
        }
      })
      .catch(() => {});
    setStartClicked(true);
  };

  createEffect(() => {
    if (startClicked()) return delay(100).then(setup);
    return Promise.resolve();
  }, [startClicked]);

  createEffect(async () => {
    if (!state.started) return;

    if (state.isPaused) {
      ref.player?.disable();
    } else if (isTouchDevice()) {
      // Mobile has no pointer lock — enable input directly.
      ref.player?.enable();
    } else if (await ref.player?.pointerLock()) {
      ref.player?.enable();
    }
  }, [state]);

  onMount(() => {
    AssetsLoaded.then(extractAssets).catch(console.error);
    manager.onLoad = () => {
      setProgress(100);
      delay(1000).then(() => setFinished(true));
    };
    manager.onProgress = (_, loaded, total) => {
      setProgress((loaded / total) * 100);
    };
  });

  return (
    <>
      <Show when={state.started && !state.isPaused}>
        <Mode />
      </Show>
      <MobileControls />
      <Menu />
      <Inventory />
      <Dialog />
      <Show
        when={finished()}
        fallback={
          <div class="gb-boot">
            <h3 class="gb-boot__title">Loading...</h3>
            <div class="progress" role="progressbar">
              <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${progress()}%` }}>
                {progress().toFixed(2)}
              </div>
            </div>
          </div>
        }
      >
        <Show when={!state.started}>
          <div class="gb-boot">
            <Show when={!startClicked()} fallback={<h3 class="gb-boot__title">Loading...</h3>}>
              <button class="btn btn-primary gb-boot__start" onClick={handleStart}>
                Start Game
              </button>
            </Show>
          </div>
        </Show>
      </Show>
    </>
  );
};

export default App;
