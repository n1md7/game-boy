import { ImageLoader, LoadingManager, Texture, TextureLoader } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader';

export const manager = new LoadingManager();

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
