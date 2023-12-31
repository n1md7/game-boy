import { createStore } from 'solid-js/store';
import { Cartridge } from '@/src/game-boy/components/Cartridge';
import { GameBoy } from '@/src/game-boy/GameBoy';
import { PlayerController } from '@/src/first-person/controllers/PlayerController';
import { createSignal } from 'solid-js';

export const [state, setState] = createStore({
  isPaused: false,
  isMuted: false,
  started: false,
});

export const [show, setShow] = createStore({
  inventory: false,
  menu: false,
  modal: false,
});

export const [modal, setModal] = createStore({
  title: '',
  description: '',
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
  cartridge?: Cartridge;
};
export const [ref, setRef] = createStore<Ref>({});

type Mode = 'Emulator' | 'First Person';
export const [mode, setMode] = createSignal<Mode>('First Person');
export const toggleMode = () => {
  setMode((mode) => {
    if (mode === 'Emulator') {
      inventory.gameBoy?.pause();
      return 'First Person';
    }
    inventory.gameBoy?.resume();
    return 'Emulator';
  });
};

export const changeCameraMode = () => inventory.gameBoy?.changeCamera();

export const inventoryToggle = () => {
  setShow({ menu: false, inventory: true, modal: false });
  setState('isPaused', (isPaused) => {
    inventory.gameBoy?.pause();
    return !isPaused;
  });
};

export const resume = () => {
  setShow({ menu: false, inventory: false, modal: false });
  setState({ isPaused: false });
  if (mode() === 'Emulator') inventory.gameBoy?.resume();
};

export const pause = () => {
  setShow({ menu: true, inventory: false, modal: false });
  setState({ isPaused: true });
  inventory.gameBoy?.pause();
};

export const start = () => {
  setState({ started: true });
};

export const showModal = (title: string, description: string) => {
  setModal({ title, description });
  setShow({ modal: true, inventory: false, menu: false });
  setState({ isPaused: true });
};

export const mute = () => {
  setState({ isMuted: true });
  inventory.gameBoy?.mute();
};

export const unmute = () => {
  setState({ isMuted: false });
  inventory.gameBoy?.unmute();
};
