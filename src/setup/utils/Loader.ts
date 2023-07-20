import { ImageLoader, LoadingManager, Texture, TextureLoader } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { delay } from '@/src/setup/utils/common';

const assetLoaderView = document.querySelector('#loading')! as HTMLDivElement;
const canvas = document.querySelector('#canvas')! as HTMLCanvasElement;

const updateProgress = (progress: number) => {
  assetLoaderView.innerHTML = `Loading... <br/><br/> ${progress.toFixed(2)}%`;
};

export const manager = new LoadingManager(
  async () => {
    console.log('INFO: Asset loading complete');
    console.log('INFO: Starting game...');
    updateProgress(100);
    await delay(500);

    const button = document.createElement('button');
    button.innerHTML = 'Start';
    button.style.width = '200px';
    button.style.height = '80px';
    button.style.fontSize = '30px';
    button.style.cursor = 'pointer';
    button.onclick = () => {
      assetLoaderView.hidden = true;
      canvas.hidden = false;
      document.body.requestPointerLock();
    };
    assetLoaderView.innerHTML = '';
    assetLoaderView.appendChild(button);
  },
  (item, loaded, total) => {
    console.log(`INFO: Loading asset "${item}"`);
    updateProgress((loaded / total) * 100);
  },
  (error) => {
    console.log(`Error: ${error}`);
    assetLoaderView.innerHTML = `Error: ${error}`;
  }
);

export class MyGLTFLoader {
  private readonly loader: GLTFLoader;

  constructor() {
    this.loader = new GLTFLoader(manager);
  }

  load(path: string): Promise<GLTF> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (resource) => resolve(resource),
        undefined,
        (error) => reject(error)
      );
    });
  }
}

export class MyImageLoader {
  private loader: ImageLoader;

  constructor() {
    this.loader = new ImageLoader(manager);
  }

  load(path: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (resource) => resolve(resource),
        undefined,
        (error) => reject(error)
      );
    });
  }
}

export class MyTextureLoader {
  private loader: TextureLoader;

  constructor() {
    this.loader = new TextureLoader(manager);
  }

  load(path: string): Promise<Texture> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (resource) => resolve(resource),
        undefined,
        (error) => reject(error)
      );
    });
  }
}

export class MyFontLoader {
  private loader: FontLoader;

  constructor() {
    this.loader = new FontLoader(manager);
  }

  load(path: string): Promise<Font> {
    return new Promise((resolve, reject) => {
      this.loader.load(
        path,
        (resource) => resolve(resource),
        undefined,
        (error) => reject(error)
      );
    });
  }
}
