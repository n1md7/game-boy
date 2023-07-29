import { createStore } from 'solid-js/store';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { GameBoy } from '@/src/game-boy/GameBoy';

export const [state, setState] = createStore({
  isPaused: false,
  isMuted: false,
  started: false,
});

export const [show, setShow] = createStore({
  inventory: true,
});

type Inventory = {
  cartridges: Cartridge[];
  gameBoy?: GameBoy;
};
export const [inventory, setInventory] = createStore<Inventory>({
  cartridges: [],
});
