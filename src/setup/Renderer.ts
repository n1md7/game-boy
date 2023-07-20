import { ACESFilmicToneMapping, VSMShadowMap, WebGLRenderer } from 'three';

export default class Renderer extends WebGLRenderer {
  constructor() {
    super({ canvas: document.querySelector('#canvas')!, antialias: true, depth: true });
    this.shadowMap.enabled = true;
    this.setSize(window.innerWidth, window.innerHeight);
    // this.shadowMap.type = THREE.PCFSoftShadowMap;
    this.shadowMap.type = VSMShadowMap;
    this.shadowMap.enabled = true;
    this.toneMapping = ACESFilmicToneMapping;
    // this.useLegacyLights = false;
    // Limit pixel ratio, 2 is more than enough
    this.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.autoClear = false; // To allow 2nd scene to render
  }
}
