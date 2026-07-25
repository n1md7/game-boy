declare module 'nipplejs' {
  interface JoystickData {
    angle?: {
      degree: number;
      radian: number;
    };
    distance: number;
    force: number;
    pressure: number;
    identifier: number;
    instance: any;
    x: number;
    y: number;
  }

  interface JoystickOptions {
    zone: HTMLElement;
    color?: string;
    size?: number;
    multitouch?: boolean;
    maxNumberOfNipples?: number;
    mode?: 'static' | 'dynamic';
    position?: Record<string, string | number>;
    restOpacity?: number;
  }

  interface Joystick {
    on(event: string, callback: Function): void;
    off(event: string, callback?: Function): void;
    destroy(): void;
  }

  export function create(options: JoystickOptions): Joystick;
  export function destroyAll(): void;
}
