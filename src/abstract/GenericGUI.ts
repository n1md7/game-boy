import GUI from 'lil-gui';
import { Euler, Group, Mesh, Vector3 } from 'three';

export class GenericGUI {
  protected constructor(
    protected readonly gui: GUI,
    private readonly min: number,
    private readonly max: number,
    private readonly step: number
  ) {
    this.gui.close();
  }

  protected applyGUIPosition(target: Vector3, step = this.step, min = this.min, max = this.max) {
    const folder = this.gui.addFolder('Position');
    folder.add(target, 'x', min, max, step);
    folder.add(target, 'y', min, max, step);
    folder.add(target, 'z', min, max, step);
    folder.close();
  }

  protected applyGUIRotation(target: Euler, step = this.step, min = this.min, max = this.max) {
    const folder = this.gui.addFolder('Rotation');
    folder.add(target, 'x', min, max, step);
    folder.add(target, 'y', min, max, step);
    folder.add(target, 'z', min, max, step);
    folder.close();
  }

  protected applyGUIScale(target: Vector3, step = this.step, min = this.min, max = this.max) {
    const folder = this.gui.addFolder('Scale');
    folder.add(target, 'x', min, max, step);
    folder.add(target, 'y', min, max, step);
    folder.add(target, 'z', min, max, step);
    folder.close();
  }

  protected applyTransformationGUI(target: Mesh | Group, step = this.step, min = this.min, max = this.max) {
    this.applyGUIPosition(target.position, step, min, max);
    this.applyGUIRotation(target.rotation, step, min, max);
    this.applyGUIScale(target.scale, step, min, max);
  }
}
