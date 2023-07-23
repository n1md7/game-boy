import GUI from 'lil-gui';
import { Debug } from '@/src/setup/utils/common';
import { Euler, Group, Mesh, Vector3 } from 'three';

export const gui = new GUI();
const screen = gui.addFolder('Screen');
const pointerLock = () => document.body.requestPointerLock();
screen.add({ pointerLock }, 'pointerLock').name('Pointer Lock');

gui.show(Debug.enabled());

export const applyPosition = (gui: GUI, object: Vector3) => {
  const folder = gui.addFolder('Position');
  folder.add(object, 'x', -10, 10, 0.001);
  folder.add(object, 'y', -10, 10, 0.001);
  folder.add(object, 'z', -10, 10, 0.001);
  folder.close();
};

export const applyRotation = (gui: GUI, object: Euler) => {
  const folder = gui.addFolder('Rotation');
  folder.add(object, 'x', -Math.PI, Math.PI, 0.001);
  folder.add(object, 'y', -Math.PI, Math.PI, 0.001);
  folder.add(object, 'z', -Math.PI, Math.PI, 0.001);
  folder.close();
};

export const applyScale = (gui: GUI, object: Vector3) => {
  const folder = gui.addFolder('Scale');
  folder.add(object, 'x', 0.1, 4, 0.001);
  folder.add(object, 'y', 0.1, 4, 0.001);
  folder.add(object, 'z', 0.1, 4, 0.001);
  folder.close();
};

export const applyGui = (gui: GUI, object: Mesh | Group) => {
  applyPosition(gui, object.position);
  applyRotation(gui, object.rotation);
  applyScale(gui, object.scale);
};
