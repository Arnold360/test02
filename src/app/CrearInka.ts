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

    // Head
    this.drawEllipse(imageData, centerX, centerY - 120, 50, 70, [255, 204, 153, 255]);

    // Eyes
    this.drawEllipse(imageData, centerX - 20, centerY - 130, 10, 15, [255, 255, 255, 255]);
    this.drawEllipse(imageData, centerX + 20, centerY - 130, 10, 15, [255, 255, 255, 255]);

    // Pupils
    this.drawEllipse(imageData, centerX - 20, centerY - 130, 5, 5, [0, 0, 0, 255]);
    this.drawEllipse(imageData, centerX + 20, centerY - 130, 5, 5, [0, 0, 0, 255]);

    // Mouth
    this.drawEllipse(imageData, centerX, centerY - 80, 20, 10, [255, 0, 0, 255]);

    // Neck
    this.drawRectangle(imageData, centerX - 10, centerY - 70, 20, 20, [255, 204, 153, 255]);

    // Torso
    this.drawRectangle(imageData, centerX - 30, centerY - 50, 60, 120, [255, 204, 153, 255]);

    // Arms
    this.drawEllipse(imageData, centerX - 50, centerY, 10, 40, [255, 204, 153, 255]);
    this.drawEllipse(imageData, centerX + 50, centerY, 10, 40, [255, 204, 153, 255]);

    // Legs
    this.drawEllipse(imageData, centerX - 15, centerY + 100, 10, 50, [255, 204, 153, 255]);
    this.drawEllipse(imageData, centerX + 15, centerY + 100, 10, 50, [255, 204, 153, 255]);
  }
}
