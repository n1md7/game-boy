import { ACESFilmicToneMapping, VSMShadowMap, WebGLRenderer } from 'three';

export default class Renderer extends WebGLRenderer {
  constructor() {
    super({ canvas: document.querySelector('#canvas')!, antialias: true, depth: true });
    this.shadowMap.enabled = true;
    this.setSize(window.innerWidth, window.innerHeight);
    this.shadowMap.type = VSMShadowMap;
    this.shadowMap.enabled = true;
    this.toneMapping = ACESFilmicToneMapping;
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
