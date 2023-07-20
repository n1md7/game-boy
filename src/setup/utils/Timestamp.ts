export class Timestamp {
  private current!: number;

  constructor() {
    this.update();
  }

  get delta() {
    return Date.now() - this.current;
  }

  update() {
    this.current = Date.now();
  }
}
