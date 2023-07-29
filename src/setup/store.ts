import { createStore } from 'solid-js/store';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { GameBoy } from '@/src/game-boy/GameBoy';
import { PlayerController } from '@/src/first-person/controllers/PlayerController';

export const [state, setState] = createStore({
  isPaused: false,
  isMuted: false,
  started: false,
});

export const [show, setShow] = createStore({
  inventory: false,
  menu: false,
});

type Inventory = {
  cartridges: Cartridge[];
  gameBoy?: GameBoy;
};
export const [inventory, setInventory] = createStore<Inventory>({
  cartridges: [],
});

type Ref = {
  player?: PlayerController;
};
export const [ref, setRef] = createStore<Ref>({});

export const inventoryToggle = () => {
  setShow({ menu: false, inventory: true });
  setState('isPaused', (isPaused) => {
    if (isPaused) inventory.gameBoy?.resume();
    else inventory.gameBoy?.pause();
    return !isPaused;
  });
};

export const resume = () => {
  setShow({ menu: false, inventory: false });
  setState({ isPaused: false });
  inventory.gameBoy?.resume();
};

export const pause = () => {
  setShow({ menu: true, inventory: false });
  setState({ isPaused: true });
  inventory.gameBoy?.pause();
};

export const start = () => {
  setState({ started: true });
};

export const mute = () => {
  setState({ isMuted: true });
  void inventory.gameBoy?.mute();
};

export const unmute = () => {
  setState({ isMuted: false });
  void inventory.gameBoy?.unmute();
};
