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
    TextureLoader.load('images/cartridges/Wolfenstein.jpeg'),
  ]),
  GLTFLoader.load('3d/game-boy/model/scene.gltf'),
  GLTFLoader.load('3d/game-boy/cartridge/scene.gltf'),
  GLTFLoader.load('3d/maps/room/scene.gltf'),
  GLTFLoader.load('3d/projector/screen/scene.gltf'),
  GLTFLoader.load('3d/projector/device/scene.gltf'),
]);

export const Assets = {
  Doom: {} as Texture,
  Duke: {} as Texture,
  Digger: {} as Texture,
  Quake: {} as Texture,
  Mario: {} as Texture,
  Wolfenstein: {} as Texture,
  GameBoy: {} as GLTF,
  Cartridge: {} as GLTF,
  Room: {} as GLTF,
  ProjectorScreen: {} as GLTF,
  ProjectorDevice: {} as GLTF,
};

export const extractAssets = (assets: Awaited<typeof AssetsLoaded>) => {
  const {
    0: { 0: Doom, 1: Duke, 2: Digger, 3: Quake, 4: Mario, 5: Wolfenstein },
    1: GameBoy,
    2: Cartridge,
    3: Room,
    4: ProjectorScreen,
    5: ProjectorDevice,
  } = assets;

  Assets.Doom = Doom;
  Assets.Duke = Duke;
  Assets.Digger = Digger;
  Assets.Quake = Quake;
  Assets.Mario = Mario;
  Assets.Wolfenstein = Wolfenstein;
  Assets.GameBoy = GameBoy;
  Assets.Cartridge = Cartridge;
  Assets.Room = Room;
  Assets.ProjectorScreen = ProjectorScreen;
  Assets.ProjectorDevice = ProjectorDevice;
};
