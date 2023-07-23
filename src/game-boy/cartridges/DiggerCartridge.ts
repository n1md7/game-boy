import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Digger } from '@/src/game-boy/games/Digger';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Texture } from 'three';

export class DiggerCartridge extends Cartridge {
  constructor(model: GLTF, image: Texture) {
    super(model, new Digger(image));
  }
}
