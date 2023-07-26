import '@/src/styles/style.css';

import type { Component } from 'solid-js';
import { createEffect, createSignal, onMount, Show } from 'solid-js';
import { manager } from '@/src/setup/utils/Loader';
import { delay } from '@/src/setup/utils/common';
import { AssetsLoaded, extractAssets } from '@/src/assets';
import { state, setup } from '@/src/main';

const App: Component = () => {
  const [progress, setProgress] = createSignal(0.0);
  const [finished, setFinished] = createSignal(false);
  const [startClicked, setStartedClicked] = createSignal(false);

  const handleStart = () => setStartedClicked(true);

  createEffect(() => {
    if (startClicked()) return delay(100).then(setup);
    return Promise.resolve();
  }, [startClicked]);

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
      <Show
        when={finished()}
        fallback={
          <div id="loading" class="text-center w-75">
            <h3 class="text-muted">Assets are loading</h3>
            <div class="progress" role="progressbar">
              <div class="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${progress()}%` }}>
                {progress().toFixed(2)}
              </div>
            </div>
          </div>
        }
      >
        <Show when={!state.started}>
          <div id="loading" class="container">
            <div class="row">
              <div class="col d-flex justify-content-center">
                <Show when={!startClicked()} fallback={'Loading...'}>
                  <button class="btn btn-outline-dark" onClick={handleStart}>
                    Start Game
                  </button>
                </Show>
              </div>
            </div>
          </div>
        </Show>
      </Show>
    </>
  );
};

export default App;