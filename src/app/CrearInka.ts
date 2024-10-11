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

  drawInka(imageData: ImageData) {
    const centerX = imageData.width / 2;
    const centerY = imageData.height / 2;

    // Cabeza
    const cabezaRadio = 70;
    for (let y = centerY - 100; y < centerY - 30; y++) {
      for (let x = centerX - cabezaRadio; x < centerX + cabezaRadio; x++) {
        if (Math.sqrt((x - centerX) ** 2 + (y - (centerY - 65)) ** 2) < cabezaRadio) {
          this.setPixel(imageData, x, y, 255, 204, 153, 255); // Color de piel
        }
      }
    }

    // Ojos
    const ojoRadio = 10;
    const ojoY = centerY - 75;
    const ojoDistanciaX = 30;
    for (let oy = ojoY - ojoRadio; oy < ojoY + ojoRadio; oy++) {
      for (let ox = centerX - ojoDistanciaX - ojoRadio; ox < centerX - ojoDistanciaX + ojoRadio; ox++) {
        if (Math.sqrt((ox - (centerX - ojoDistanciaX)) ** 2 + (oy - ojoY) ** 2) < ojoRadio) {
          this.setPixel(imageData, ox, oy, 255, 255, 255, 255); // Blanco del ojo
        }
      }
    }
    for (let oy = ojoY - ojoRadio; oy < ojoY + ojoRadio; oy++) {
      for (let ox = centerX + ojoDistanciaX - ojoRadio; ox < centerX + ojoDistanciaX + ojoRadio; ox++) {
        if (Math.sqrt((ox - (centerX + ojoDistanciaX)) ** 2 + (oy - ojoY) ** 2) < ojoRadio) {
          this.setPixel(imageData, ox, oy, 255, 255, 255, 255); // Blanco del ojo
        }
      }
    }

    // Pupilas
    const pupilaRadio = 5;
    for (let py = ojoY - pupilaRadio; py < ojoY + pupilaRadio; py++) {
      for (let px = centerX - ojoDistanciaX - pupilaRadio; px < centerX - ojoDistanciaX + pupilaRadio; px++) {
        if (Math.sqrt((px - (centerX - ojoDistanciaX)) ** 2 + (py - ojoY) ** 2) < pupilaRadio) {
          this.setPixel(imageData, px, py, 0, 0, 0, 255); // Pupila
        }
      }
    }
    for (let py = ojoY - pupilaRadio; py < ojoY + pupilaRadio; py++) {
      for (let px = centerX + ojoDistanciaX - pupilaRadio; px < centerX + ojoDistanciaX + pupilaRadio; px++) {
        if (Math.sqrt((px - (centerX + ojoDistanciaX)) ** 2 + (py - ojoY) ** 2) < pupilaRadio) {
          this.setPixel(imageData, px, py, 0, 0, 0, 255); // Pupila
        }
      }
    }

    // Boca
    const bocaY = centerY - 40;
    const bocaAncho = 40;
    const bocaAlto = 10;
    for (let by = bocaY - bocaAlto; by < bocaY + bocaAlto; by++) {
      for (let bx = centerX - bocaAncho; bx < centerX + bocaAncho; bx++) {
        if (Math.sqrt((bx - centerX) ** 2 + (by - bocaY) ** 2) < bocaAncho) {
          this.setPixel(imageData, bx, by, 255, 0, 0, 255); // Boca
        }
      }
    }

    // Cuello
    for (let y = centerY - 30; y < centerY; y++) {
      for (let x = centerX - 20; x < centerX + 20; x++) {
        this.setPixel(imageData, x, y, 255, 204, 153, 255); // Cuello
      }
    }

    // Torso
    for (let y = centerY; y < centerY + 150; y++) {
      for (let x = centerX - 50; x < centerX + 50; x++) {
        this.setPixel(imageData, x, y, 255, 204, 153, 255); // Torso
      }
    }

    // Piernas
    for (let y = centerY + 150; y < centerY + 300; y++) {
      for (let x = centerX - 20; x < centerX; x++) {
        this.setPixel(imageData, x, y, 255, 204, 153, 255); // Pierna izquierda
      }
      for (let x = centerX; x < centerX + 20; x++) {
        this.setPixel(imageData, x, y, 255, 204, 153, 255); // Pierna derecha
      }
    }

    // Brazos
    for (let y = centerY; y < centerY + 100; y++) {
      for (let x = centerX - 70; x < centerX - 50; x++) {
        this.setPixel(imageData, x, y, 255, 204, 153, 255); // Brazo izquierdo
      }
      for (let x = centerX + 50; x < centerX + 70; x++) {
        this.setPixel(imageData, x, y, 255, 204, 153, 255); // Brazo derecho
      }
    }
  }
}
