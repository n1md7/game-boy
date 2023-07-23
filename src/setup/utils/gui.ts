import GUI from 'lil-gui';
import { Debug } from '@/src/setup/utils/common';

export const gui = new GUI();
gui.show(Debug.enabled());
