import { Octree } from 'three/examples/jsm/math/Octree.js';
import { InputController } from '@/src/first-person/controllers/InputController';
import { MouseController } from '@/src/first-person/controllers/MouseController';
import { Camera } from '@/src/setup';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Player } from '@/src/first-person/Player';

export class PlayerController {
  private readonly player: Player;
  private readonly inputController: InputController;
  private readonly mouseController: MouseController;
  // private readonly gameBoyController: GameBoyController;

  private readonly cartridges: Cartridge[] = [];

  // private mouseIsDisabled = false;
  // private inputIsDisabled = false;

  constructor(camera: Camera, world: Octree) {
    this.player = new Player(camera, world);
    this.inputController = new InputController();
    this.mouseController = new MouseController(camera);
    // this.gameBoyController = new GameBoyController(camera);
  }

  intersects(cartridge: Cartridge) {
    return this.player.capsule.intersectsBox(cartridge.toBox3());
  }

  pickUp(cartridge: Cartridge) {
    this.cartridges.push(cartridge);
  }

  // enableMouseMovements() {
  //   this.mouseIsDisabled = false;
  // }
  //
  // enableUserInput() {
  //   this.inputIsDisabled = false;
  // }
  //
  // disableMouseMovements() {
  //   this.mouseIsDisabled = true;
  // }
  //
  // disableUserInput() {
  //   this.inputIsDisabled = true;
  // }

  // enable() {
  //   this.enableMouseMovements();
  //   this.enableUserInput();
  // }
  //
  // disable() {
  //   this.disableMouseMovements();
  //   this.disableUserInput();
  // }

  subscribe() {
    this.inputController.subscribe();
    this.mouseController.subscribe();

    this.mouseController.addEventListener('mouse:click-start', () => null);
    this.mouseController.addEventListener('mouse:click-end', () => null);
    this.mouseController.addEventListener('PointerLock:disabled', () => null);
  }

  update(delta: number) {
    this.player.update(delta);
    this.player.action(this.inputController.actions, delta);
  }
}
