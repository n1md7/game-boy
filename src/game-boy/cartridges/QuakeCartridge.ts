import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Quake } from '@/src/game-boy/games/Quake';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Texture } from 'three';

export class QuakeCartridge extends Cartridge {
  constructor(model: GLTF, image: Texture) {
    super(model, new Quake(image));
  }
}
