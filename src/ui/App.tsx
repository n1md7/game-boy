import '@/src/styles/style.css';

import type { Component } from 'solid-js';
import { createEffect, createSignal, onMount, Show } from 'solid-js';
import { manager } from '@/src/setup/utils/Loader';
import { delay } from '@/src/setup/utils/common';
import { Assets, AssetsLoaded, extractAssets } from '@/src/assets';
import { setup } from '@/src/main';
import { setInventory, state } from '@/src/setup/store';
import Inventory from '@/src/ui/components/inventory/Inventory';
import { MarioCartridge } from '@/src/game-boy/cartridges/MarioCartridge';
import { DoomCartridge } from '@/src/game-boy/cartridges/DoomCartridge';
import { QuakeCartridge } from '@/src/game-boy/cartridges/QuakeCartridge';
import { DiggerCartridge } from '@/src/game-boy/cartridges/DiggerCartridge';
import { DukeCartridge } from '@/src/game-boy/cartridges/DukeCartridge';

const App: Component = () => {
  const [progress, setProgress] = createSignal(0.0);
  const [finished, setFinished] = createSignal(true);
  const [startClicked, setStartClicked] = createSignal(false);

  const handleStart = () => setStartClicked(true);

  createEffect(() => {
    if (startClicked()) return delay(100).then(setup);
    return Promise.resolve();
  }, [startClicked]);

  onMount(() => {
    AssetsLoaded.then(extractAssets)
      .then(() => {
        // TODO: remove this when done
        const marioCartridge = new MarioCartridge(Assets.Cartridge, Assets.Mario);
        const doomCartridge = new DoomCartridge(Assets.Cartridge, Assets.Doom);
        const quakeCartridge = new QuakeCartridge(Assets.Cartridge, Assets.Quake);
        const diggerCartridge = new DiggerCartridge(Assets.Cartridge, Assets.Digger);
        const dukeCartridge = new DukeCartridge(Assets.Cartridge, Assets.Duke);

        setInventory({
          cartridges: [marioCartridge, doomCartridge, quakeCartridge, diggerCartridge, dukeCartridge],
        });
      })
      .catch(console.error);
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
      <Inventory />
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
