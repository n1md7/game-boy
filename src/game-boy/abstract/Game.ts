import { CommandInterface } from 'emulators';
import { Screen } from '@/src/game-boy/components/Screen';

export abstract class Game {
  protected abstract readonly bundlePath: string;
  protected readonly rootPath = import.meta.env.GAME_BASE_URL || '.';

  protected commandInterface!: CommandInterface;
  protected screen!: Screen;

  private rgba!: Uint8ClampedArray;

  protected constructor() {
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFrame = this.onFrame.bind(this);
  }

  public get ci() {
    return this.commandInterface;
  }

  private get length() {
    return this.screen.size.width * this.screen.size.height;
  }

  public connect(screen: Screen) {
    this.screen = screen;
  }

  public async run() {
    this.rgba = new Uint8ClampedArray(this.length * 4);

    const bundle = await emulatorsUi.network.resolveBundle(this.bundlePath);
    this.commandInterface = await emulators.dosboxWorker(bundle);
    this.subscribeUserInputs();

    return this;
  }

  public async stop() {
    await this.commandInterface.exit();
    this.unsubscribeUserInputs();
  }

  protected subscribeUserInputs() {
    emulatorsUi.sound.audioNode(this.commandInterface);

    this.commandInterface.events().onFrame(this.onFrame);

    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  protected unsubscribeUserInputs() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  private onKeyDown(e: KeyboardEvent) {
    const keyCode = emulatorsUi.controls.domToKeyCode(e.keyCode);
    this.commandInterface.sendKeyEvent(keyCode, true);
  }

  private onKeyUp(e: KeyboardEvent) {
    const keyCode = emulatorsUi.controls.domToKeyCode(e.keyCode);
    this.commandInterface.sendKeyEvent(keyCode, false);
  }

  private onFrame(rgb: Uint8Array | null) {
    for (let next = 0; next < 320 * 200; ++next) {
      if (!rgb) continue;
      this.rgba[next * 4 + 0] = rgb[next * 3 + 0];
      this.rgba[next * 4 + 1] = rgb[next * 3 + 1];
      this.rgba[next * 4 + 2] = rgb[next * 3 + 2];
      this.rgba[next * 4 + 3] = 255;
    }

    const imageData = new ImageData(this.rgba, this.screen.size.width, this.screen.size.height);
    this.screen.putImageData(imageData, 0, 0);
    this.screen.needsUpdate();
  }
}
