import { CommandInterface } from 'emulators';
import { Screen } from '@/src/game-boy/components/Screen';
import { Cartridges } from '@/src/game-boy/enums/Cartridge';
import { Texture } from 'three';

export abstract class Game {
  public abstract readonly name: Cartridges;
  public abstract readonly description: string;

  protected readonly rootPath = import.meta.env.GAME_BASE_URL || '.';

  protected commandInterface!: CommandInterface;
  protected screen!: Screen;

  private rgba!: Uint8ClampedArray;
  private bundle!: Uint8Array;

  public constructor(public readonly image: Texture) {
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFrame = this.onFrame.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    emulators.pathPrefix = './js-dos/';
  }

  public get ci() {
    return this.commandInterface;
  }

  protected get bundlePath() {
    return `${this.rootPath}/games/${this.name}.jsdos`;
  }

  private get length() {
    return this.screen.size.width * this.screen.size.height;
  }

  public connect(screen: Screen) {
    this.screen = screen;
  }

  public async load() {
    this.bundle = await emulatorsUi.network.resolveBundle(this.bundlePath);
  }

  public async run() {
    this.rgba = new Uint8ClampedArray(this.length * 4);

    this.commandInterface = await emulators.dosboxWorker(this.bundle);
    this.subscribeUserInputs();

    return this;
  }

  public async stop() {
    await this.commandInterface?.exit();
    this.unsubscribeUserInputs();
  }

  protected subscribeUserInputs() {
    emulatorsUi.sound.audioNode(this.commandInterface);

    this.commandInterface.events().onFrame(this.onFrame);

    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  protected unsubscribeUserInputs() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  private onKeyDown(e: KeyboardEvent) {
    const keyCode = emulatorsUi.controls.domToKeyCode(e.keyCode);
    this.commandInterface.sendKeyEvent(keyCode, true);
  }

  private onKeyUp(e: KeyboardEvent) {
    const keyCode = emulatorsUi.controls.domToKeyCode(e.keyCode);
    this.commandInterface.sendKeyEvent(keyCode, false);
  }

  private onMouseDown() {
    this.commandInterface.sendMouseButton(0, true);
  }

  private onMouseUp() {
    this.commandInterface.sendMouseButton(0, false);
  }

  private onMouseMove(e: MouseEvent) {
    this.commandInterface.sendMouseMotion(e.movementX, e.movementY);
  }

  private onFrame(rgb: Uint8Array | null) {
    const { width, height } = this.screen.size;
    const pixels = width * height;
    for (let next = 0; next < pixels; ++next) {
      if (!rgb) continue;
      this.rgba[next * 4 + 0] = rgb[next * 3 + 0];
      this.rgba[next * 4 + 1] = rgb[next * 3 + 1];
      this.rgba[next * 4 + 2] = rgb[next * 3 + 2];
      this.rgba[next * 4 + 3] = 255;
    }

    const imageData = new ImageData(this.rgba, width, height);
    this.screen.putImageData(imageData);
  }
}
