export class CrosshairController {
  private static instance: CrosshairController;
  private readonly crosshair: HTMLDivElement;
  private accuracy = 100;

  private constructor() {
    this.crosshair = document.createElement('div');
    this.crosshair.setAttribute('class', 'crosshair');
    this.crosshair.setAttribute('hidden', '');
    this.crosshair.innerHTML = `
      <div class='line-horizontal left'></div>
      <div class='line-horizontal right'></div>
      <div class='line-vertical top'></div>
      <div class='line-vertical bottom'></div>
    `;

    document.body.appendChild(this.crosshair);
  }

  static getInstance() {
    if (!CrosshairController.instance) {
      CrosshairController.instance = new CrosshairController();
    }

    return CrosshairController.instance;
  }

  show(): void {
    this.crosshair.hidden = false;
  }

  hide(): void {
    this.crosshair.hidden = true;
  }

  setAccuracy(accuracy: number): void {
    this.accuracy = this.calculateAccuracy(accuracy);
    this.crosshair.setAttribute('class', 'crosshair ' + `accuracy-${this.accuracy}`);
  }

  getAccuracy() {
    return this.accuracy;
  }

  private calculateAccuracy(accuracy: number) {
    // Values are 25, 50, 75 and 100
    // Clamp it to the closest value upwards
    if (accuracy <= 25) return 25;
    if (accuracy <= 50) return 50;
    if (accuracy <= 75) return 75;

    return 100;
  }
}
