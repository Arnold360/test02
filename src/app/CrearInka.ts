 export class CrearInka {
  canvasInka!: HTMLCanvasElement;
  ctxInka!: CanvasRenderingContext2D;
  imgData!: ImageData;

  constructor() {}

  setPixel(imageData: ImageData, x: number, y: number, r: number, g: number, b: number, a: number) {
    const index = (x + y * imageData.width) * 4;
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

     // Draw Background
    this.drawBackground(imageData);

    // Draw Head
    this.drawHead(imageData, centerX, centerY);

    // Draw Eyes
    this.drawEyes(imageData, centerX, centerY);

    // Draw Nose
    this.drawNose(imageData, centerX, centerY);

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

    // Draw Hands
    this.drawHand(imageData, centerX - 55, centerY + 40);
    this.drawHand(imageData, centerX + 55, centerY + 40);

    // Draw Hair
    this.drawHair(imageData, centerX, centerY);

    // Draw Clothes
    this.drawClothes(imageData, centerX, centerY);

    // Draw Accessories
    this.drawAccessories(imageData, centerX, centerY);

   
  }

  drawHead(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY - 120, 50, 60, [255, 204, 153, 255]);
    this.drawEars(imageData, centerX, centerY - 120);
  }

  drawEyes(imageData: ImageData, centerX: number, centerY: number) {
    // Left Eye
    this.drawEllipse(imageData, centerX - 18, centerY - 135, 8, 12, [255, 255, 255, 255]);
    this.drawEllipse(imageData, centerX - 18, centerY - 135, 4, 4, [0, 0, 0, 255]);

    // Right Eye
    this.drawEllipse(imageData, centerX + 18, centerY - 135, 8, 12, [255, 255, 255, 255]);
    this.drawEllipse(imageData, centerX + 18, centerY - 135, 4, 4, [0, 0, 0, 255]);

    // Eyebrows
    this.drawRectangle(imageData, centerX - 26, centerY - 150, 16, 4, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX + 10, centerY - 150, 16, 4, [0, 0, 0, 255]);

    // Eyelashes
    this.drawRectangle(imageData, centerX - 22, centerY - 142, 2, 6, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX + 20, centerY - 142, 2, 6, [0, 0, 0, 255]);
  }

  drawNose(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY - 125, 5, 8, [255, 204, 153, 255]);
  }

  drawMouth(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY - 110, 15, 8, [255, 0, 0, 255]);
  }

  drawEars(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX - 60, centerY, 10, 20, [255, 204, 153, 255]);
    this.drawEllipse(imageData, centerX + 60, centerY, 10, 20, [255, 204, 153, 255]);
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

  drawHand(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY, 10, 15, [255, 204, 153, 255]);
    // Fingers
    this.drawRectangle(imageData, centerX - 8, centerY - 15, 2, 15, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX - 4, centerY - 15, 2, 15, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX, centerY - 15, 2, 15, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX + 4, centerY - 15, 2, 15, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX + 8, centerY - 15, 2, 15, [255, 204, 153, 255]);
  }

  drawLegs(imageData: ImageData, centerX: number, centerY: number) {
    // Left Leg
    this.drawEllipse(imageData, centerX - 20, centerY + 120, 12, 70, [255, 204, 153, 255]);

    // Right Leg
    this.drawEllipse(imageData, centerX + 20, centerY + 120, 12, 70, [255, 204, 153, 255]);

    // Left Foot
    this.drawFoot(imageData, centerX - 20, centerY + 190);

    // Right Foot
    this.drawFoot(imageData, centerX + 20, centerY + 190);
  }

  drawFoot(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY, 12, 15, [255, 204, 153, 255]);
    // Toes
    this.drawRectangle(imageData, centerX - 10, centerY + 15, 2, 8, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX - 5, centerY + 15, 2, 8, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX, centerY + 15, 2, 8, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX + 5, centerY + 15, 2, 8, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX + 10, centerY + 15, 2, 8, [255, 204, 153, 255]);
  }

  drawHair(imageData: ImageData, centerX: number, centerY: number) {
    // Add hair details
    this.drawEllipse(imageData, centerX, centerY - 170, 50, 20, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX - 50, centerY - 150, 100, 20, [0, 0, 0, 255]);
  }

  drawClothes(imageData: ImageData, centerX: number, centerY: number) {
    // Add clothes details
    this.drawRectangle(imageData, centerX - 35, centerY - 36, 70, 80, [0, 0, 255, 255]); // Shirt
    this.drawRectangle(imageData, centerX - 35, centerY + 44, 70, 50, [0, 255, 0, 255]); // Pants
  }

  drawAccessories(imageData: ImageData, centerX: number, centerY: number) {
    // Hat
    this.drawEllipse(imageData, centerX, centerY - 180, 60, 20, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX - 60, centerY - 170, 120, 20, [0, 0, 0, 255]);

    // Glasses
    this.drawRectangle(imageData, centerX - 30, centerY - 135, 20, 10, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX + 10, centerY - 135, 20, 10, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX - 10, centerY - 135, 20, 2, [0, 0, 0, 255]);

    // Necklace
    this.drawEllipse(imageData, centerX, centerY - 70, 30, 5, [255, 215, 0, 255]);
  }

  drawBackground(imageData: ImageData) {
    // Sky
    this.drawRectangle(imageData, 0, 0, imageData.width, imageData.height / 2, [135, 206, 235, 255]);

    // Ground
    this.drawRectangle(imageData, 0, imageData.height / 2, imageData.width, imageData.height / 2, [34, 139, 34, 255]);

    // Sun
    this.drawEllipse(imageData, imageData.width - 60, 60, 30, 30, [255, 255, 0, 255]);

    // Trees
    this.drawTree(imageData, 100, imageData.height / 2);
    this.drawTree(imageData, 300, imageData.height / 2);
    this.drawTree(imageData, 500, imageData.height / 2);
  }

  drawTree(imageData: ImageData, baseX: number, baseY: number) {
    // Trunk
    this.drawRectangle(imageData, baseX - 10, baseY, 20, 60, [139, 69, 19, 255]);

    // Leaves
    this.drawEllipse(imageData, baseX, baseY - 30, 30, 40, [34, 139, 34, 255]);
    this.drawEllipse(imageData, baseX - 20, baseY - 20, 30, 40, [34, 139, 34, 255]);
    this.drawEllipse(imageData, baseX + 20, baseY - 20, 30, 40, [34, 139, 34, 255]);
  }
}
