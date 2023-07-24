import { MyGLTFLoader, MyTextureLoader } from '@/src/setup/utils/Loader';
import { Texture } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

const GLTFLoader = new MyGLTFLoader();
const TextureLoader = new MyTextureLoader();

export const AssetsLoaded = Promise.all([
  Promise.all([
    TextureLoader.load('images/cartridges/Doom.jpeg'),
    TextureLoader.load('images/cartridges/Duke.jpeg'),
    TextureLoader.load('images/cartridges/Digger.jpeg'),
    TextureLoader.load('images/cartridges/Quake.jpeg'),
    TextureLoader.load('images/cartridges/Mario.jpeg'),
  ]),
  GLTFLoader.load('3d/game-boy/model/scene.gltf'),
  GLTFLoader.load('3d/game-boy/cartridge/scene.gltf'),
  GLTFLoader.load('3d/maps/room/scene.gltf'),
  GLTFLoader.load('3d/projector/scene.gltf'),
]);

export const Assets = {
  Doom: {} as Texture,
  Duke: {} as Texture,
  Digger: {} as Texture,
  Quake: {} as Texture,
  Mario: {} as Texture,
  GameBoy: {} as GLTF,
  Cartridge: {} as GLTF,
  Room: {} as GLTF,
  Projector: {} as GLTF,
};

export const extractAssets = (assets: Awaited<typeof AssetsLoaded>) => {
  const {
    0: { 0: Doom, 1: Duke, 2: Digger, 3: Quake, 4: Mario },
    1: GameBoy,
    2: Cartridge,
    3: Room,
    4: Projector,
  } = assets;

  Assets.Doom = Doom;
  Assets.Duke = Duke;
  Assets.Digger = Digger;
  Assets.Quake = Quake;
  Assets.Mario = Mario;
  Assets.GameBoy = GameBoy;
  Assets.Cartridge = Cartridge;
  Assets.Room = Room;
  Assets.Projector = Projector;
};
