import { createStore } from 'solid-js/store';

export const [state, setState] = createStore({
  isPaused: false,
  isMuted: false,
  started: false,
});
