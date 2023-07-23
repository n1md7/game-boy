import '@/src/styles/style.css';

import { MyGLTFLoader, MyTextureLoader } from '@/src/setup/utils/Loader';
import { Performance } from '@/src/setup/utils/Performance';
import { WindowUtils } from '@/src/setup/utils/window.utils';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { Timestamp } from '@/src/setup/utils/Timestamp';
import { Renderer, Camera, Scene } from '@/src/setup';
import { Player } from '@/src/first-person/Player';
import { Debug } from '@/src/setup/utils/common';
import { GameBoy } from '@/src/game-boy/GameBoy';
import { Clock } from 'three';
import { MarioCartridge } from '@/src/game-boy/cartridges/MarioCartridge';
import { DoomCartridge } from '@/src/game-boy/cartridges/DoomCartridge';
import { QuakeCartridge } from '@/src/game-boy/cartridges/QuakeCartridge';
import { DiggerCartridge } from '@/src/game-boy/cartridges/DiggerCartridge';
import { gui } from '@/src/setup/utils/gui';
import { DukeCartridge } from '@/src/game-boy/cartridges/DukeCartridge';

emulators.pathPrefix = './js-dos/';

const aGLTF = new MyGLTFLoader();
const aIMAGE = new MyTextureLoader();

(async function setup() {
  const [images, skyGLTF, gameBoyGLTF, cartridgeGLTF] = await Promise.all([
    Promise.all([
      aIMAGE.load('images/checker.png'),
      aIMAGE.load('images/cartridges/Doom.jpeg'),
      aIMAGE.load('images/cartridges/Duke.jpeg'),
      aIMAGE.load('images/cartridges/Digger.jpeg'),
      aIMAGE.load('images/cartridges/Quake.jpeg'),
      aIMAGE.load('images/cartridges/Mario.jpeg'),
    ]),
    aGLTF.load('3d/sky-pano/scene.gltf'),
    aGLTF.load('3d/game-boy/model/scene.gltf'),
    aGLTF.load('3d/game-boy/cartridge/scene.gltf'),
  ]);

  const { 0: groundTexture, 1: DoomTexture, 2: DukeTexture, 3: DiggerTexture, 4: QuakeTexture, 5: MarioTexture } = images;

  const world = new Octree();
  const renderer = new Renderer();
  const camera = new Camera();
  const scene = new Scene(gui.addFolder('Main scene'), world);

  const marioCartridge = new MarioCartridge(cartridgeGLTF, MarioTexture);
  const doomCartridge = new DoomCartridge(cartridgeGLTF, DoomTexture);
  const quakeCartridge = new QuakeCartridge(cartridgeGLTF, QuakeTexture);
  const diggerCartridge = new DiggerCartridge(cartridgeGLTF, DiggerTexture);
  const dukeCartridge = new DukeCartridge(cartridgeGLTF, DukeTexture);

  const cartridges = [marioCartridge, doomCartridge, quakeCartridge, diggerCartridge, dukeCartridge];

  const gameBoy = new GameBoy(gameBoyGLTF);
  gameBoy.scene.position.set(0, 1, 0);
  // gameBoy.scene.scale.set(0.25, 0.25, 0.25);

  // Create a transparent sphere

  diggerCartridge.scene.position.set(1.5, 0.5, 2.5);
  marioCartridge.scene.position.set(2.5, 0.5, 5.0);
  doomCartridge.scene.position.set(-1.5, 0.5, 2.5);
  quakeCartridge.scene.position.set(-2.5, 0.5, 5.0);
  dukeCartridge.scene.position.set(0, 0.5, 5.0);

  scene.add(gameBoy.scene, ...cartridges.map((cartridge) => cartridge.scene));

  gui.show(Debug.enabled());

  const player = new Player(camera, world);

  scene.addLight().addGround(groundTexture).addSky(skyGLTF).addFog();

  {
    const FPS = 60;
    const DELAY_MS = 1000 / FPS; // millis
    const clock = new Clock();
    const performance = new Performance();
    const timestamp = new Timestamp();
    const windowUtils = new WindowUtils(renderer, camera);
    (function onSetup() {
      Debug.enabled() && performance.show();
      windowUtils.subscribe();
      player.subscribe();
    })();
    (function gameLoop() {
      Debug.enabled() && performance.start();
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      if (timestamp.delta >= DELAY_MS) {
        player.update(delta);
        if (camera.position.y <= -25) player.reset();

        for (const cartridge of cartridges) {
          if (!cartridge.scene.visible) continue;

          if (player.capsule.intersectsBox(cartridge.toBox3())) {
            cartridge.scene.visible = false;
            gameBoy.insertCartridge(cartridge);
          }

          cartridge.update(time);
        }

        timestamp.update();

        renderer.render(scene, camera);
      }

      Debug.enabled() && performance.end();
      requestAnimationFrame(gameLoop);
    })();
  }
})().catch(console.error);
