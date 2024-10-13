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

  drawGradientEllipse(imageData: ImageData, centerX: number, centerY: number, radiusX: number, radiusY: number, startColor: [number, number, number, number], endColor: [number, number, number, number]) {
    for (let y = -radiusY; y <= radiusY; y++) {
      for (let x = -radiusX; x <= radiusX; x++) {
        if ((x * x) / (radiusX * radiusX) + (y * y) / (radiusY * radiusY) <= 1) {
          const t = Math.sqrt((x * x) / (radiusX * radiusX) + (y * y) / (radiusY * radiusY));
          const r = startColor[0] * (1 - t) + endColor[0] * t;
          const g = startColor[1] * (1 - t) + endColor[1] * t;
          const b = startColor[2] * (1 - t) + endColor[2] * t;
          const a = startColor[3] * (1 - t) + endColor[3] * t;
          this.setPixel(imageData, centerX + x, centerY + y, r, g, b, a);
        }
      }
    }
  }

  drawShading(imageData: ImageData, centerX: number, centerY: number, radiusX: number, radiusY: number) {
    this.drawEllipse(imageData, centerX, centerY + radiusY / 2, radiusX, radiusY / 4, [0, 0, 0, 50]); // semi-transparent black
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
    // Draw Clavicle
    this.drawClavicle(imageData, centerX, centerY);
    
    // Draw Shoulders
    this.drawShoulders(imageData, centerX, centerY);

    // Draw Torso
    this.drawTorso(imageData, centerX, centerY);

    // Draw Arms
    this.drawFlexedLimb(imageData, centerX, centerY, true, "arm"); // Left Arm
    this.drawFlexedLimb(imageData, centerX, centerY, false, "arm"); // Right Arm

    // Draw Legs
    this.drawFlexedLimb(imageData, centerX, centerY, true, "leg"); // Left Leg
    this.drawFlexedLimb(imageData, centerX, centerY, false, "leg"); // Right Leg

    // Draw Hands
    this.drawHand(imageData, centerX - 70, centerY + 50); // Adjusted for left forearm
    this.drawHand(imageData, centerX + 70, centerY + 50); // Adjusted for right forearm

    // Draw Feet
    this.drawFeet(imageData, centerX, centerY);

    // Draw Hair
    this.drawHair(imageData, centerX, centerY);

    // Draw Clothes
    this.drawClothes(imageData, centerX, centerY);

    // Draw Accessories
    this.drawAccessories(imageData, centerX, centerY);
  }

  drawShadow(imageData: ImageData, centerX: number, centerY: number, radiusX: number, radiusY: number) {
    this.drawEllipse(imageData, centerX, centerY + radiusY / 2, radiusX, radiusY, [0, 0, 0, 100]); // semi-transparent black
  }

  drawHead(imageData: ImageData, centerX: number, centerY: number) {
    
    this.drawEllipse(imageData, centerX, centerY - 120, 50, 60, [255, 204, 153, 255]);
    this.drawEars(imageData, centerX, centerY - 10);
  }

  drawEyes(imageData: ImageData, centerX: number, centerY: number) {
    // Left Eye
    this.drawEllipse(imageData, centerX - 25, centerY - 130, 8, 12, [255, 255, 255, 255]); // White part
    this.drawGradientEllipse(imageData, centerX - 25, centerY - 130, 4, 4, [0, 0, 0, 255], [0, 0, 128, 255]); // Iris with gradient
    this.drawEllipse(imageData, centerX - 25, centerY - 130, 2, 2, [255, 255, 255, 255]); // Highlight
    this.drawShading(imageData, centerX - 25, centerY - 130, 8, 12); // Add shading for depth

    // Right Eye
    this.drawEllipse(imageData, centerX + 25, centerY - 130, 8, 12, [255, 255, 255, 255]); // White part
    this.drawGradientEllipse(imageData, centerX + 25, centerY - 130, 4, 4, [0, 0, 0, 255], [0, 0, 128, 255]); // Iris with gradient
    this.drawEllipse(imageData, centerX + 25, centerY - 130, 2, 2, [255, 255, 255, 255]); // Highlight
    this.drawShading(imageData, centerX + 25, centerY - 130, 8, 12); // Add shading for depth
  }

  drawNose(imageData: ImageData, centerX: number, centerY: number) {
    // Adjusted the nose color for better distinction
    this.drawEllipse(imageData, centerX, centerY - 115, 5, 8, [255, 160, 122, 255]);
  }

  drawMouth(imageData: ImageData, centerX: number, centerY: number) {
    // Lowered the mouth position for a more natural look
    this.drawEllipse(imageData, centerX, centerY - 90, 15, 8, [255, 0, 0, 255]);
  }

  drawEars(imageData: ImageData, centerX: number, centerY: number) {
  // Ajustar las posiciones de las orejas para que estén más cerca de la cabeza
  this.drawEllipse(imageData, centerX - 50, centerY - 100, 10, 20, [255, 204, 153, 255]); // Ajustar el valor de centerY
  this.drawEllipse(imageData, centerX + 50, centerY - 100, 10, 20, [255, 204, 153, 255]); // Ajustar el valor de centerY
}

  drawNeck(imageData: ImageData, centerX: number, centerY: number) {
    this.drawRectangle(imageData, centerX - 12, centerY - 60, 24, 24, [255, 204, 153, 255]);
  }

  drawClavicle(imageData: ImageData, centerX: number, centerY: number) {
    // Dibujar la clavícula como dos líneas curvas
    this.drawEllipse(imageData, centerX - 25, centerY - 50, 15, 5, [255, 204, 153, 255]); // Clavícula izquierda
    this.drawEllipse(imageData, centerX + 25, centerY - 50, 15, 5, [255, 204, 153, 255]); // Clavícula derecha
  }
  
  drawShoulders(imageData: ImageData, centerX: number, centerY: number) {
    // Left Shoulder
    this.drawEllipse(imageData, centerX - 45, centerY - 35, 15, 10, [255, 204, 153, 255]);
    // Right Shoulder
    this.drawEllipse(imageData, centerX + 45, centerY - 35, 15, 10, [255, 204, 153, 255]);
  }
  
  drawTorso(imageData: ImageData, centerX: number, centerY: number) {
    this.drawRectangle(imageData, centerX - 35, centerY - 36, 70, 130, [255, 204, 153, 255]);
  }

  drawUpperArm(imageData: ImageData, centerX: number, centerY: number, isLeft: boolean) {
    const offset = isLeft ? -55 : 55;
    this.drawEllipse(imageData, centerX + offset, centerY - 10, 12, 25, [255, 204, 153, 255]);
  }

  drawForearm(imageData: ImageData, centerX: number, centerY: number, isLeft: boolean) {
    const offset = isLeft ? -70 : 70;
    this.drawEllipse(imageData, centerX + offset, centerY + 20, 12, 25, [255, 204, 153, 255]);
  }

  drawThigh(imageData: ImageData, centerX: number, centerY: number, isLeft: boolean) {
    const offset = isLeft ? -20 : 20;
    this.drawEllipse(imageData, centerX + offset, centerY + 90, 12, 35, [255, 204, 153, 255]);
  }

  drawLowerLeg(imageData: ImageData, centerX: number, centerY: number, isLeft: boolean) {
    const offset = isLeft ? -20 : 20;
    this.drawEllipse(imageData, centerX + offset, centerY + 150, 12, 35, [255, 204, 153, 255]);
  }

  drawFlexedLimb(imageData: ImageData, centerX: number, centerY: number, isLeft: boolean, part: string) {
    const offset = isLeft ? -20 : 20;
    const flexOffset = 10; // Adjust this value for desired flexion

    if (part === "arm") {
      this.drawUpperArm(imageData, centerX, centerY, isLeft);
      this.drawForearm(imageData, centerX, centerY + flexOffset, isLeft);
    } else if (part === "leg") {
      this.drawThigh(imageData, centerX, centerY, isLeft);
      this.drawLowerLeg(imageData, centerX, centerY + flexOffset, isLeft);
    }
  }

  drawHand(imageData: ImageData, centerX: number, centerY: number) {
    this.drawEllipse(imageData, centerX, centerY, 10, 15, [255, 204, 153, 255]);
    // Fingers
    this.drawRectangle(imageData, centerX - 8, centerY - 15, 2, 35, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX - 4, centerY - 15, 2, 37, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX, centerY - 15, 2, 38 , [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX + 4, centerY - 15, 2, 36, [255, 204, 153, 255]);
    this.drawRectangle(imageData, centerX + 8, centerY - 15, 2, 33, [255, 204, 153, 255]);
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

  drawFeet(imageData: ImageData, centerX: number, centerY: number) {
    // Left Foot
    this.drawFoot(imageData, centerX - 20, centerY + 190);

    // Right Foot
    this.drawFoot(imageData, centerX + 20, centerY + 190);
  }

  drawHair(imageData: ImageData, centerX: number, centerY: number) {
    // Add hair details
    this.drawEllipse(imageData, centerX, centerY - 170, 50, 20, [0, 0, 0, 255]);
  
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
    this.drawRectangle(imageData, centerX - 30, centerY - 130, 20, 10, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX + 10, centerY - 130, 20, 10, [0, 0, 0, 255]);
    this.drawRectangle(imageData, centerX - 10, centerY - 130, 20, 2, [0, 0, 0, 255]);

    // Necklace
    this.drawEllipse(imageData, centerX, centerY - 70, 30, 5, [255, 215, 0, 255]);

    // Belt
    this.drawRectangle(imageData, centerX - 35, centerY + 44, 70, 10, [139, 69, 19, 255]); // Brown belt
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
