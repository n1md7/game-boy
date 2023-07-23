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
import { Clock, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { MarioCartridge } from '@/src/game-boy/cartridges/MarioCartridge';
import { DoomCartridge } from '@/src/game-boy/cartridges/DoomCartridge';
import { QuakeCartridge } from '@/src/game-boy/cartridges/QuakeCartridge';
import { DiggerCartridge } from '@/src/game-boy/cartridges/DiggerCartridge';
import { applyGui, gui } from '@/src/setup/utils/gui';
import { DukeCartridge } from '@/src/game-boy/cartridges/DukeCartridge';

emulators.pathPrefix = './js-dos/';

const aGLTF = new MyGLTFLoader();
const aIMAGE = new MyTextureLoader();

(async function setup() {
  const [images, gameBoyGLTF, cartridgeGLTF, roomMapGLTF] = await Promise.all([
    Promise.all([
      aIMAGE.load('images/cartridges/Doom.jpeg'),
      aIMAGE.load('images/cartridges/Duke.jpeg'),
      aIMAGE.load('images/cartridges/Digger.jpeg'),
      aIMAGE.load('images/cartridges/Quake.jpeg'),
      aIMAGE.load('images/cartridges/Mario.jpeg'),
    ]),
    aGLTF.load('3d/game-boy/model/scene.gltf'),
    aGLTF.load('3d/game-boy/cartridge/scene.gltf'),
    aGLTF.load('3d/maps/room/scene.gltf'),
  ]);

  const { 0: DoomTexture, 1: DukeTexture, 2: DiggerTexture, 3: QuakeTexture, 4: MarioTexture } = images;

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
  gameBoy.scene.position.set(4.3, 1, 1);
  gameBoy.scene.rotation.set(0, -Math.PI / 2, 0);
  // gameBoy.scene.scale.set(0.25, 0.25, 0.25);

  quakeCartridge.scene.position.set(3.477, 0.763, -1.134);
  diggerCartridge.scene.position.set(-0.916, 1.603, 3.562);
  marioCartridge.scene.position.set(-0.636, 0.5, -1.476);
  doomCartridge.scene.position.set(-0.916, 1.603, -0.7);
  dukeCartridge.scene.position.set(0.763, 1.323, 5.801);

  scene.add(gameBoy.scene, ...cartridges.map((cartridge) => cartridge.scene));

  const player = new Player(camera, world);

  scene.add(roomMapGLTF.scene);

  roomMapGLTF.scene.position.set(0, 0, 2);
  roomMapGLTF.scene.scale.multiplyScalar(0.035);

  const wall = new Mesh(
    new PlaneGeometry(100, 100),
    new MeshBasicMaterial({
      color: 'rgba(152,151,151,0.69)',
    })
  );
  wall.position.set(131, 57.178, -11.926);
  wall.rotation.set(0, -Math.PI / 2, 0);
  wall.scale.set(2.111, 1.244, 0);
  roomMapGLTF.scene.add(wall);
  applyGui(gui.addFolder('Wall'), wall);

  world.fromGraphNode(roomMapGLTF.scene);

  scene.addLight();

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
            gameBoy.removeCartridge();
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
