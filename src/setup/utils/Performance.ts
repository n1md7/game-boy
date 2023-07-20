import Stats from 'stats.js';

export class Performance {
  private readonly stats = new Stats();

  show() {
    this.stats.showPanel(0);
    document.body.appendChild(this.stats.dom);
  }

  start() {
    this.stats.begin();
  }

  end() {
    this.stats.end();
  }
}
