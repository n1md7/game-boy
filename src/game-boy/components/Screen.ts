import { GenericScreen } from '@/src/abstract/GenericScreen';
import { Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

export class Screen extends GenericScreen {
  constructor(width: number, height: number) {
    super(width, height);

    this.scene.name = 'GameBoyScreen';
    // Required to fill the Game Boy model screen-area as black color
    const background = new Mesh();
    background.geometry = new PlaneGeometry(1, 0.764);
    background.material = new MeshBasicMaterial({ color: 0x000000 });
    background.position.set(0, 0, -0.0001);
    this.scene.add(background);
  }
}
