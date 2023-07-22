import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Duke } from '@/src/game-boy/games/Duke';

export class DukeCartridge extends Cartridge {
  constructor(model: GLTF) {
    super(model, new Duke());
  }
}
