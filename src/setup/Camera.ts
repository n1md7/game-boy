import { PerspectiveCamera } from 'three';

export default class Camera extends PerspectiveCamera {
  constructor(far = 1000, fov = 45) {
    const near = 0.1;
    super(fov, window.innerWidth / window.innerHeight, near, far);

    this.position.set(0, 2, 20);
    this.rotation.order = 'YXZ';
  }
}
