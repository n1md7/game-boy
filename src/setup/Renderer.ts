import { ACESFilmicToneMapping, VSMShadowMap, WebGLRenderer } from 'three';

export default class Renderer extends WebGLRenderer {
  constructor() {
    super({ canvas: Renderer.createCanvas(), antialias: true, depth: true });
    this.shadowMap.enabled = true;
    this.shadowMap.type = VSMShadowMap;
    this.shadowMap.enabled = true;
    this.toneMapping = ACESFilmicToneMapping;
    this.autoClear = false; // To allow 2nd scene to render
    this.setSize(window.innerWidth, window.innerHeight);
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  static createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    document.body.appendChild(canvas);

    return canvas;
  }
}
