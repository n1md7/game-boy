import { MyGLTFLoader, MyTextureLoader } from '@/src/setup/utils/Loader';
import { Performance } from '@/src/setup/utils/Performance';
import { WindowUtils } from '@/src/setup/utils/window.utils';
import { Octree } from 'three/examples/jsm/math/Octree.js';
import { Timestamp } from '@/src/setup/utils/Timestamp';
import { Renderer, Camera, Scene } from '@/src/setup';
import { Player } from '@/src/first-person/Player';
import { Debug } from '@/src/setup/utils/common';
import { Clock } from 'three';
import GUI from 'lil-gui';

import '@/src/styles/style.css';

const aGLTF = new MyGLTFLoader();
const aIMAGE = new MyTextureLoader();

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

  scene.add(gameBoy.scene, ducky.scene);

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
