import { Emulators } from 'emulators';
import { EmulatorsUi } from 'emulators-ui';

declare global {
  declare const emulators: Emulators;
  declare const emulatorsUi: EmulatorsUi;
}
