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

(async function setup() {
  const aGLTF = new MyGLTFLoader();
  const aIMAGE = new MyTextureLoader();
  const [groundTexture, boxTexture, skyGLTF, shootingTargetGLTF, guns] = await Promise.all([
    aIMAGE.load('images/checker.png'),
    aIMAGE.load('images/box.png'),
    aGLTF.load('3d/sky_pano/scene.gltf'),
    aGLTF.load('3d/shooting-target/scene.gltf'),
    Promise.all([aGLTF.load('3d/desert-eagle/scene.gltf'), aGLTF.load('3d/m60/scene.gltf')]),
  ]);

  const [desertEagleGLTF, m60GLTF] = guns;

  const gui = new GUI();
  const world = new Octree();
  const renderer = new Renderer();
  const camera = new Camera();
  const scene = new Scene(gui.addFolder('Main scene'), world);

  gui.show(Debug.enabled());

  const player = new Player(camera, world, scene, gui.addFolder('Player'), {
    DesertEagle: desertEagleGLTF,
    M60: m60GLTF,
  });

  scene
    .addLight()
    .addGround(groundTexture)
    .addSky(skyGLTF)
    .addAxisHelper()
    .addGridHelper()
    .addStairs(boxTexture)
    .addShootingTarget(shootingTargetGLTF)
    .addBoxes(boxTexture, 64);

  {
    const FPS = 60;
    const DELAY_MS = 1000 / FPS; // millis
    const clock = new Clock();
    const performance = new Performance();
    const timestamp = new Timestamp();
    const windowUtils = new WindowUtils(renderer, camera, player.weapon.camera);
    (function onSetup() {
      performance.show();
      windowUtils.subscribe();
    })();
    (function gameLoop() {
      performance.start();
      const delta = clock.getDelta();
      if (timestamp.delta >= DELAY_MS) {
        player.update(delta);
        if (camera.position.y <= -25) player.reset();

        timestamp.update();

        renderer.clear(); // Clear the color buffer
        renderer.render(scene, camera);

        renderer.clearDepth(); // Clear only the depth buffer

        camera.getWorldPosition(player.weapon.camera.position);
        camera.getWorldQuaternion(player.weapon.camera.quaternion);

        renderer.render(player.weapon.scene, player.weapon.camera);
      }

      requestAnimationFrame(gameLoop);
      performance.end();
    })();
  }
})().catch(console.error);
