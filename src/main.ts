import { MyGLTFLoader, MyTextureLoader } from '@/src/setup/utils/Loader';
import { Performance } from '@/src/setup/utils/Performance';
import { WindowUtils } from '@/src/setup/utils/window.utils';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { Timestamp } from '@/src/setup/utils/Timestamp';
import { Renderer, Camera, Scene } from '@/src/setup';
import { Player } from '@/src/first-person/Player';
import { Debug } from '@/src/setup/utils/common';

import { CanvasTexture, Clock, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import GUI from 'lil-gui';

import '@/src/styles/style.css';

const aGLTF = new MyGLTFLoader();
const aIMAGE = new MyTextureLoader();

const img = document.createElement('canvas');
img.width = 320;
img.height = 200;

const ctx = img.getContext('2d');
const texture = new CanvasTexture(img);

declare const emulatorsUi: any;
declare const emulators: any;

async function runDigger() {
  stop();

  const bundle = await emulatorsUi.network.resolveBundle('/digger.jsdos');
  const ciPromise = emulators.dosWorker(bundle);
  const rgba = new Uint8ClampedArray(320 * 200 * 4);
  ciPromise.then((ci: any) => {
    emulatorsUi.sound.audioNode(ci);

    ci.events().onFrame((rgb: any[]) => {
      for (let next = 0; next < 320 * 200; ++next) {
        rgba[next * 4 + 0] = rgb[next * 3 + 0];
        rgba[next * 4 + 1] = rgb[next * 3 + 1];
        rgba[next * 4 + 2] = rgb[next * 3 + 2];
        rgba[next * 4 + 3] = 255;
      }

      ctx?.putImageData(new ImageData(rgba, 320, 200), 0, 0);
      texture.needsUpdate = true;
    });

    window.addEventListener('keydown', (e) => {
      const keyCode = emulatorsUi.controls.domToKeyCode(e.keyCode);
      ci.sendKeyEvent(keyCode, true);
    });

    window.addEventListener('keyup', (e) => {
      const keyCode = emulatorsUi.controls.domToKeyCode(e.keyCode);
      ci.sendKeyEvent(keyCode, false);
    });
  });
}

(async function setup() {
  const [groundTexture, skyGLTF, gameBoy, ducky] = await Promise.all([
    aIMAGE.load('images/checker.png'),
    aGLTF.load('3d/sky-pano/scene.gltf'),
    aGLTF.load('3d/game-boy/scene.gltf'),
    aGLTF.load('3d/duck/scene.gltf'),
  ]);

  const gui = new GUI();
  const world = new Octree();
  const renderer = new Renderer();
  const camera = new Camera();
  const scene = new Scene(gui.addFolder('Main scene'), world);

  gui.show(Debug.enabled());

  const player = new Player(camera, world);

  world.fromGraphNode(gameBoy.scene);
  world.fromGraphNode(ducky.scene);

  ducky.scene.position.set(0, 2, 0);
  ducky.scene.scale.multiplyScalar(0.25);
  gameBoy.scene.position.set(0, 1, 0);

  // Create a screen from 2d plane
  const screen = new Mesh();
  screen.geometry = new PlaneGeometry(0.995, 0.76);
  screen.material = new MeshBasicMaterial({ map: texture });
  screen.position.set(0, 1.43, 0.2);
  const screenGUI = gui.addFolder('Screen');
  screenGUI.add(screen.position, 'x', -1, 2, 0.01);
  screenGUI.add(screen.position, 'y', -1, 2, 0.01);
  screenGUI.add(screen.position, 'z', -1, 2, 0.01);

  scene.add(gameBoy.scene, ducky.scene, screen);

  scene.addLight().addGround(groundTexture).addSky(skyGLTF).addFog();

  {
    const FPS = 60;
    const DELAY_MS = 1000 / FPS; // millis
    const clock = new Clock();
    const performance = new Performance();
    const timestamp = new Timestamp();
    const windowUtils = new WindowUtils(renderer, camera);
    (function onSetup() {
      performance.show();
      windowUtils.subscribe();
      player.subscribe();
      runDigger();
    })();
    (function gameLoop() {
      performance.start();
      const delta = clock.getDelta();
      if (timestamp.delta >= DELAY_MS) {
        player.update(delta);
        if (camera.position.y <= -25) player.reset();

        timestamp.update();

        renderer.render(scene, camera);
      }

      performance.end();
      requestAnimationFrame(gameLoop);
    })();
  }
})().catch(console.error);
