export const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
export const isPortrait = () => window.innerHeight > window.innerWidth;
