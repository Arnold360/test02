
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
    const centerX = 400;
    const centerY = 300;
    const cabezaRadio = 50;
    const cuerpoAncho = 100;
    const cuerpoAlto = 200;

    // Cabeza
    for (let y = centerY - cabezaRadio; y < centerY + cabezaRadio; y++) {
      for (let x = centerX - cabezaRadio; x < centerX + cabezaRadio; x++) {
        if (((x - centerX) ** 2) / (cabezaRadio ** 2) + ((y - centerY) ** 2) / (cabezaRadio ** 2) < 1) {
          this.setPixel(imageData, x, y, 255, 204, 153, 255);
        }
      }
    }

    // Cejas
    for (let x = centerX - 60; x < centerX - 30; x++) {
      let y = centerY - 120 - Math.sin((x - (centerX - 60)) * Math.PI / 40) * 10;
      this.setPixel(imageData, x, Math.round(y), 0, 0, 0, 255);
    }
    for (let x = centerX + 30; x < centerX + 60; x++) {
      let y = centerY - 120 - Math.sin((x - (centerX + 30)) * Math.PI / 40) * 10;
      this.setPixel(imageData, x, Math.round(y), 0, 0, 0, 255);
    }

    
// Ojos
for (let y = centerY - 140; y < centerY - 110; y++) {
  for (let x = centerX - 50; x < centerX - 10; x++) {
    if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 125)) ** 2) < 20) {
      this.setPixel(imageData, x, y, 255, 255, 255, 255);
    }
    if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 125)) ** 2) < 15) {
      this.setPixel(imageData, x, y, 0, 100, 255, 255);
    }
    if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 125)) ** 2) < 5) {
      this.setPixel(imageData, x, y, 0, 0, 0, 255);
    }
  }
  for (let x = centerX + 10; x < centerX + 50; x++) {
    if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 125)) ** 2) < 20) {
      this.setPixel(imageData, x, y, 255, 255, 255, 255);
    }
    if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 125)) ** 2) < 15) {
      this.setPixel(imageData, x, y, 0, 100, 255, 255);
    }
    if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 125)) ** 2) < 5) {
      this.setPixel(imageData, x, y, 0, 0, 0, 255);
    }
  }
}

// Pupila izquierda
for (let y = centerY - 130; y < centerY - 120; y++) {
  for (let x = centerX - 35; x < centerX - 25; x++) {
    this.setPixel(imageData, x, y, 0, 0, 0, 255);
  }
}

// Pupila derecha
for (let y = centerY - 130; y < centerY - 120; y++) {
  for (let x = centerX + 25; x < centerX + 35; x++) {
    this.setPixel(imageData, x, y, 0, 0, 0, 255);
  }
}

// Nariz
for (let y = centerY - 100; y < centerY - 80; y++) {
  for (let x = centerX - 10; x < centerX + 10; x++) {
    this.setPixel(imageData, x, y, 255, 204, 153, 255);
  }
}

// Boca
for (let y = centerY - 70; y < centerY - 50; y++) {
  for (let x = centerX - 30; x < centerX + 30; x++) {
    this.setPixel(imageData, x, y, 255, 0, 0, 255);
  }
}

// Cuello
for (let y = centerY - 50; y < centerY - 20; y++) {
  for (let x = centerX - 20 - (y - (centerY - 35)) / 2; x < centerX + 20 + (y - (centerY - 35)) / 2; x++) {
    this.setPixel(imageData, x, y, 255, 218, 185, 255);
  }
}

// Torso
for (let y = centerY - 20; y < centerY + 130; y++) {
  for (let x = centerX - cuerpoAncho / 2; x < centerX + cuerpoAncho / 2; x++) {
    this.setPixel(imageData, x, y, 0, 0, 0, 255);
  }
}

// Brazos
for (let y = centerY; y < centerY + 80; y++) {
  for (let x = centerX - 70; x < centerX - 40; x++) {
    if (((x - (centerX - 55)) ** 2) / (15 ** 2) + ((y - (centerY + 40)) ** 2) / (40 ** 2) < 1) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255);
    }
  }
  for (let x = centerX + 40; x < centerX + 70; x++) {
    if (((x - (centerX + 55)) ** 2) / (15 ** 2) + ((y - (centerY + 40)) ** 2) / (40 ** 2) < 1) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255);
    }
  }
}

// Manos
for (let y = centerY + 80; y < centerY + 100; y++) {
  for (let x = centerX - 90; x < centerX - 70; x++) {
    if (((x - (centerX - 80)) ** 2) / (10 ** 2) + ((y - (centerY + 90)) ** 2) / (10 ** 2) < 1) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255);
    }
  }
  for (let x = centerX + 70; x < centerX + 90; x++) {
    if (((x - (centerX + 80)) ** 2) / (10 ** 2) + ((y - (centerY + 90)) ** 2) / (10 ** 2) < 1) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255);
    }
  }
}

// Piernas
for (let y = centerY + 130; y < centerY + 210; y++) {
  for (let x = centerX - 50; x < centerX - 20; x++) {
    if (((x - (centerX - 35)) ** 2) / (15 ** 2) + ((y - (centerY + 160)) ** 2) / (40 ** 2) < 1) {
      this.setPixel(imageData,

// Pies
for (let y = centerY + 210; y < centerY + 230; y++) {
  for (let x = centerX - 70; x < centerX - 40; x++) {
    if (((x - (centerX - 55)) ** 2) / (15 ** 2) + ((y - (centerY + 210)) ** 2) / (10 ** 2) < 1) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255);
    }
  }
  for (let x = centerX + 40; x < centerX + 70; x++) {
    if (((x - (centerX + 55)) ** 2) / (15 ** 2) + ((y - (centerY + 210)) ** 2) / (10 ** 2) < 1) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255);
    }
  }
}

// Detalles de los pies
for (let y = centerY + 220; y < centerY + 230; y++) {
  for (let x = centerX - 60; x < centerX - 50; x++) {
    this.setPixel(imageData, x, y, 0, 0, 0, 255);
  }
  for (let x = centerX + 50; x < centerX + 60; x++) {
    this.setPixel(imageData, x, y, 0, 0, 0, 255);
  }
}

// Sombreado
for (let y = centerY - 200; y < centerY + 230; y++) {
  for (let x = centerX - 100; x < centerX + 100; x++) {
    if (((x - centerX) ** 2) / (100 ** 2) + ((y - centerY) ** 2) / (150 ** 2) < 1) {
      this.setPixel(imageData, x, y, 50, 50, 50, 255);
    }
  }
}
}
}
