import { Group } from 'three';
import { Screen } from '@/src/projector-display/components/Screen';
import { Assets } from '@/src/assets';
import { gui } from '@/src/setup/utils/gui';
import { GenericGUI } from '@/src/abstract/GenericGUI';

export class ProjectorDisplay extends GenericGUI {
  public readonly screen: Screen;
  private readonly group: Group;
  private readonly model: Group;

  constructor() {
    super(gui.addFolder('Projector'), -200, 200, 0.001);

    this.group = new Group();
    this.model = Assets.Projector.scene.clone();
    // Let's use Full HD resolution for the projector.
    this.screen = new Screen(1920, 1080);
    this.group.add(this.screen.scene, this.model);

    this.group.position.set(126, 0, -15.397);

    this.model.position.set(0, 68.589, 0);
    this.model.rotation.set(0, -Math.PI, 0);
    this.model.scale.multiplyScalar(10);

    this.screen.scene.position.set(-0.01, 68.589, -0.01);
    this.screen.scene.rotation.set(0, -Math.PI / 2, 0);
    this.screen.scene.scale.multiplyScalar(110);
    this.screen.write('No Signal! Please check your HDMI or Type-C connection');

    this.applyTransformationGUI(this.group);
  }

  get scene() {
    return this.group;
  }
}
