import { Clock } from 'three';
import { Assets } from '@/src/assets';
import { Debug } from '@/src/setup/utils/common';
import { GameBoy } from '@/src/game-boy/GameBoy';
import { Performance } from '@/src/setup/utils/Performance';
import { Resizer } from '@/src/setup/utils/resizer';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { Timestamp } from '@/src/setup/utils/Timestamp';
import { Renderer, Camera, Scene } from '@/src/setup';
import { MarioCartridge } from '@/src/game-boy/cartridges/MarioCartridge';
import { DoomCartridge } from '@/src/game-boy/cartridges/DoomCartridge';
import { QuakeCartridge } from '@/src/game-boy/cartridges/QuakeCartridge';
import { DiggerCartridge } from '@/src/game-boy/cartridges/DiggerCartridge';
import { DukeCartridge } from '@/src/game-boy/cartridges/DukeCartridge';
import { PlayerController } from '@/src/first-person/controllers/PlayerController';
import { pause, resume, setRef, setState, show, state } from '@/src/setup/store';

export function setup() {
  const FPS = 60;
  const DELAY = 1000 / FPS; // millis
  const world = new Octree();
  const clock = new Clock();
  const camera = new Camera();
  const renderer = new Renderer();
  const scene = new Scene(Assets.Room);
  const player = new PlayerController(camera, world);
  const gameBoy = new GameBoy();
  const performance = new Performance();
  const timestamp = new Timestamp();
  const resizer = new Resizer(renderer, camera);

  world.fromGraphNode(Assets.Room.scene);

  gameBoy.scene.position.set(1.6, 1, 1);
  gameBoy.scene.rotation.set(0, -Math.PI / 2, 0);
  gameBoy.scene.scale.multiplyScalar(0.35);

  const marioCartridge = new MarioCartridge(Assets.Cartridge, Assets.Mario);
  const doomCartridge = new DoomCartridge(Assets.Cartridge, Assets.Doom);
  const quakeCartridge = new QuakeCartridge(Assets.Cartridge, Assets.Quake);
  const diggerCartridge = new DiggerCartridge(Assets.Cartridge, Assets.Digger);
  const dukeCartridge = new DukeCartridge(Assets.Cartridge, Assets.Duke);

  world.fromGraphNode(marioCartridge);

  const cartridges = [marioCartridge, doomCartridge, quakeCartridge, diggerCartridge, dukeCartridge];

  quakeCartridge.scene.position.set(3.477, 0.763, -1.134);
  diggerCartridge.scene.position.set(-0.916, 1.603, 3.562);
  marioCartridge.scene.position.set(-0.636, 0.5, -1.476);
  doomCartridge.scene.position.set(-0.916, 1.603, -0.7);
  dukeCartridge.scene.position.set(0.763, 1.323, 5.801);

  scene.room.add(...cartridges.map((cartridge) => cartridge.scene));

  scene.add(gameBoy.scene);

  {
    (function onSetup() {
      Debug.enabled() && performance.show();
      resizer.subscribe();
      player.subscribe();
      // Wire up the gameboy to the projector screen
      gameBoy.connectExternalDisplay(scene.projectorScreen);
      setState({ started: true });
      setRef({ player });
      document.addEventListener('pointerlockchange', () => {
        const isLocked = document.pointerLockElement === document.body;
        if (isLocked) resume();
        else {
          if (show.inventory) return;
          pause();
        }
      });
    })();
    (function gameLoop() {
      Debug.enabled() && performance.start();
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      if (timestamp.delta >= DELAY) {
        if (!state.isPaused && state.started) {
          player.update(delta);

          if (player.intersects(gameBoy)) player.pickUp(gameBoy);
          for (const cartridge of cartridges) {
            if (!cartridge.scene.visible) continue;

            if (player.intersects(cartridge)) player.pickUp(cartridge);

            cartridge.update(time);

            {
              gameBoy.scene.position.setY(Math.sin(time) * 0.05 + 0.5);
              gameBoy.scene.rotation.y = time;
            }
          }
        }

        timestamp.update();

        renderer.render(scene, camera);
      }

      Debug.enabled() && performance.end();
      requestAnimationFrame(gameLoop);
    })();
  }
}
