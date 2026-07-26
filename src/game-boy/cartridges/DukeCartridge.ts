import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Duke } from '@/src/game-boy/games/Duke';
import { Texture } from 'three';

export class DukeCartridge extends Cartridge {
  constructor(model: GLTF, image: Texture) {
    super(model, new Duke(image));
  }
}
