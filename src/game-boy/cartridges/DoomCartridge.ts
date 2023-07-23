import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Doom } from '@/src/game-boy/games/Doom';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Texture } from 'three';

export class DoomCartridge extends Cartridge {
  constructor(model: GLTF, image: Texture) {
    super(model, new Doom(image));
  }
}
