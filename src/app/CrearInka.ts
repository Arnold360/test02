export class CrearInka {
  canvasInka!: HTMLCanvasElement;
  ctxInka!: CanvasRenderingContext2D;
  imgData!: ImageData;

  constructor() {}

  setPixel(imageData: ImageData, x: number, y: number, r: number, g: number, b: number, a: number) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
  }

  drawEllipse(imageData: ImageData, centerX: number, centerY: number, radiusX: number, radiusY: number, color: [number, number, number, number]) {
    for (let y = -radiusY; y <= radiusY; y++) {
      for (let x = -radiusX; x <= radiusX; x++) {
        if ((x * x) / (radiusX * radiusX) + (y * y) / (radiusY * radiusY) <= 1) {
          this.setPixel(imageData, centerX + x, centerY + y, ...color);
        }
      }
    }
  }

  drawRectangle(imageData: ImageData, xStart: number, yStart: number, width: number, height: number, color: [number, number, number, number]) {
    for (let y = yStart; y < yStart + height; y++) {
      for (let x = xStart; x < xStart + width; x++) {
        this.setPixel(imageData, x, y, ...color);
      }
    }
  }

  drawInka(imageData: ImageData) {
    const centerX = imageData.width / 2;
    const centerY = imageData.height / 2;

    // Draw Head
    this.drawHead(imageData, centerX, centerY);

    // Draw Eyes
    this.drawEyes(imageData, centerX, centerY);

    // Draw Mouth
    this.drawMouth(imageData, centerX, centerY);

    // Draw Neck
    this.drawNeck(imageData, centerX, centerY);

    // Draw Torso
    this.drawTorso(imageData, centerX, centerY);

    // Draw Arms
    this.drawArms(imageData, centerX, centerY);

    // Draw Legs
    this.drawLegs(imageData, centerX, centerY);
  }

  drawHead(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY - 120, 50, 60, [255, 204, 153, 255]);
  }

  drawEyes(imageData: ImageData, centerX: number, centerY: number) {
    // Left Eye
    this.drawEllipse(imageData, centerX - 18, centerY - 135, 8, 12, [255, 255, 255, 255]);
    this.drawEllipse(imageData, centerX - 18, centerY - 135, 4, 4, [0, 0, 0, 255]);

    // Right Eye
    this.drawEllipse(imageData, centerX + 18, centerY - 135, 8, 12, [255, 255, 255, 255]);
    this.drawEllipse(imageData, centerX + 18, centerY - 135, 4, 4, [0, 0, 0, 255]);
  }

  drawMouth(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY - 110, 15, 8, [255, 0, 0, 255]);
  }

  drawNeck(imageData: ImageData, centerX: number, centerY: number) {
    this.drawRectangle(imageData, centerX - 12, centerY - 60, 24, 24, [255, 204, 153, 255]);
  }

  drawTorso(imageData: ImageData, centerX: number, centerY: number) {
    this.drawRectangle(imageData, centerX - 35, centerY - 36, 70, 130, [255, 204, 153, 255]);
  }

  drawArms(imageData: ImageData, centerX: number, centerY: number) {
    // Left Arm
    this.drawEllipse(imageData, centerX - 55, centerY - 10, 12, 50, [255, 204, 153, 255]);

    // Right Arm
    this.drawEllipse(imageData, centerX + 55, centerY - 10, 12, 50, [255, 204, 153, 255]);
  }

  drawLegs(imageData: ImageData, centerX: number, centerY: number) {
    // Left Leg
    this.drawEllipse(imageData, centerX - 20, centerY + 120, 12, 70, [255, 204, 153, 255]);

    // Right Leg
    this.drawEllipse(imageData, centerX + 20, centerY + 120, 12, 70, [255, 204, 153, 255]);
  }
}
