import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Texture } from 'three';
import { Wolfenstein } from '@/src/game-boy/games/Wolfenstein';

export class WolfensteinCartridge extends Cartridge {
  constructor(model: GLTF, image: Texture) {
    super(model, new Wolfenstein(image));
  }
}
