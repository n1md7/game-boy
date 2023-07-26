import { ACESFilmicToneMapping, VSMShadowMap, WebGLRenderer } from 'three';

export default class Renderer extends WebGLRenderer {
  constructor() {
    super({ canvas: Renderer.createCanvas(), antialias: true, depth: true });
    this.shadowMap.enabled = true;
    this.setSize(window.innerWidth, window.innerHeight);
    this.shadowMap.type = VSMShadowMap;
    this.shadowMap.enabled = true;
    this.toneMapping = ACESFilmicToneMapping;
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  static createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.appendChild(canvas);

    return canvas;
  }
}
