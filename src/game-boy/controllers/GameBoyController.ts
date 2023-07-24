import { Camera } from '@/src/setup';

export class GameBoyController {
  // private readonly scene: Scene;
  // private readonly gameBoy: GameBoy;
  public readonly camera: Camera;
  constructor(camera: Camera) {
    this.camera = camera;
    // this.scene = new Scene();
    // this.gameBoy = new GameBoy();
  }
}
