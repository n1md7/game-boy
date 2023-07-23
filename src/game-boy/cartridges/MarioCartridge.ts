import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Mario } from '@/src/game-boy/games/Mario';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Texture } from 'three';

export class MarioCartridge extends Cartridge {
  constructor(model: GLTF, image: Texture) {
    super(model, new Mario(image));
  }
}
