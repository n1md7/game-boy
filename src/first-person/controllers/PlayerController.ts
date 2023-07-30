import { Octree } from 'three/examples/jsm/math/Octree.js';
import { InputController } from '@/src/first-person/controllers/InputController';
import { MouseController } from '@/src/first-person/controllers/MouseController';
import { Camera } from '@/src/setup';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { Player } from '@/src/first-person/Player';
import { GameBoy } from '@/src/game-boy/GameBoy';
import { setInventory } from '@/src/setup/store';

export class PlayerController {
  private readonly player: Player;
  private readonly inputController: InputController;
  private readonly mouseController: MouseController;

  private mouseIsDisabled = false;
  private inputIsDisabled = false;

  constructor(camera: Camera, world: Octree) {
    this.player = new Player(camera, world);
    this.inputController = new InputController();
    this.mouseController = new MouseController();
  }

  intersects(gameBoy: GameBoy): boolean;
  intersects(cartridge: Cartridge): boolean;
  intersects(entity: Cartridge | GameBoy): boolean {
    return this.player.capsule.intersectsBox(entity.toBox3());
  }

  pickUp(gameBoy: GameBoy): void;
  pickUp(cartridge: Cartridge): void;
  pickUp(entity: Cartridge | GameBoy): void {
    entity.scene.visible = false;
    entity.equipped = true;
    if (entity instanceof GameBoy) setInventory('gameBoy', entity);
    else {
      setInventory('cartridges', (cartridges) => [...cartridges, entity]);
    }
  }

  enableMouseMovements() {
    this.mouseIsDisabled = false;
  }

  enableUserInput() {
    this.inputIsDisabled = false;
  }

  disableMouseMovements() {
    this.mouseIsDisabled = true;
  }

  disableUserInput() {
    this.inputIsDisabled = true;
  }

  enable() {
    this.enableMouseMovements();
    this.enableUserInput();
  }

  disable() {
    this.disableMouseMovements();
    this.disableUserInput();
    this.exitPointerLock();
  }

  subscribe() {
    this.inputController.subscribe();
    this.mouseController.subscribe();
  }

  async pointerLock() {
    try {
      await document.body.requestPointerLock();
      return true;
    } catch (error) {
      console.warn(error);
    }

    return false;
  }

  exitPointerLock() {
    document.exitPointerLock();
  }

  update(delta: number) {
    this.player.update(delta);

    if (!this.inputIsDisabled) this.player.action(this.inputController.actions, delta);
    if (!this.mouseIsDisabled) this.player.rotation(this.mouseController.rotation);
  }
}
