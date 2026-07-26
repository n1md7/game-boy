import { Screen } from '@/src/projector-display/components/Screen';
import { Assets } from '@/src/assets';
import { Group } from 'three';

export class ProjectorDisplay {
  public readonly screen: Screen;
  private readonly group: Group;
  private readonly model: Group;

  constructor() {
    this.group = new Group();
    this.group.name = 'Projector';
    this.model = Assets.ProjectorScreen.scene.clone();
    this.screen = new Screen(1920, 1080);
    this.group.add(this.screen.scene, this.model);

    this.group.position.set(126, 0, -15.397);

    this.model.position.set(0, 68.589, 0);
    this.model.rotation.set(0, -Math.PI, 0);
    this.model.scale.multiplyScalar(10);

    this.screen.scene.position.set(-0.01, 68.589, -0.01);
    this.screen.scene.rotation.set(0, -Math.PI / 2, 0);
    this.screen.scene.scale.multiplyScalar(110);
    this.screen.displayNoSignal('HDMI or Type-C');
  }

  get scene() {
    return this.group;
  }
}
