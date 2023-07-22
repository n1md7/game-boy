import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Mario } from '@/src/game-boy/games/Mario';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export class MarioCartridge extends Cartridge {
  constructor(model: GLTF) {
    super(model, new Mario());
  }
}
