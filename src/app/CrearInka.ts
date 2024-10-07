export class CrearInka {

  canvasInka!: HTMLCanvasElement;
  ctxInka!: CanvasRenderingContext2D;
  imgData!: ImageData;

  constructor() {}

  // Función para establecer un píxel en la imagen
  setPixel(imageData: ImageData, x: number, y: number, r: number, g: number, b: number, a: number) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
  }

  drawInka(imageData: ImageData) {
    const centerX = 300;
    const centerY = 200;
    const headRadius = 50;
    const bodyWidth = 100;
    const bodyHeight = 200;
    const headCenterX = 400;
    const headCenterY = 175;
    const headWidth = 150; // Ancho de la cabeza
    const headHeight = 200; // Altura de la cabeza

    // Cabeza ovalada
    for (let y = headCenterY - headHeight / 2; y <= centerY + headHeight / 2; y++) {
      for (let x = headCenterX - headWidth / 2; x <= centerX + headWidth / 2; x++) {
        if (((x - headCenterX) ** 2) / (headWidth / 2) ** 2 + ((y - headCenterY) ** 2) / (headHeight / 2) ** 2 < 1) {
          this.setPixel(imageData, x, y, 255, 204, 153, 255); // Color piel
        }
      }
    }

    // Ceja izquierda
    for (let x = centerX - 50; x < centerX - 10; x++) {
      let y = centerY - 150 - Math.sin((x - (centerX - 50)) * Math.PI / 40) * 10;
      for (let offsetY = -1; offsetY <= 1; offsetY++) {
        this.setPixel(imageData, x, Math.round(y + offsetY), 0, 0, 0, 255); // Color negro para las cejas
      }
    }

    // Ceja derecha
    for (let x = centerX + 10; x < centerX + 50; x++) {
      let y = centerY - 150 - Math.sin((x - (centerX + 10)) * Math.PI / 40) * 10;
      for (let offsetY = -1; offsetY <= 1; offsetY++) {
        this.setPixel(imageData, x, Math.round(y + offsetY), 0, 0, 0, 255); // Color negro para las cejas
      }
    }

    // Ojo izquierdo
    for (let y = centerY - 130; y < centerY - 100; y++) {
      for (let x = centerX - 50; x < centerX - 10; x++) {
        // Blanco del ojo
        if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 115)) ** 2) < 15) {
          this.setPixel(imageData, x, y, 255, 255, 255, 255);
        }

        // Iris
        if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 115)) ** 2) < 10) {
          this.setPixel(imageData, x, y, 0, 100, 255, 255);
        }

        // Pupila
        if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 115)) ** 2) < 5) {
          this.setPixel(imageData, x, y, 0, 0, 0, 255);
        }
      }
    }

    // Ojo derecho
    for (let y = centerY - 130; y < centerY - 100; y++) {
      for (let x = centerX + 10; x < centerX + 50; x++) {
        // Blanco del ojo
        if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 115)) ** 2) < 15) {
          this.setPixel(imageData, x, y, 255, 255, 255, 255);
        }

        // Iris
        if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 115)) ** 2) < 10) {
          this.setPixel(imageData, x, y, 0, 100, 255, 255);
        }

        // Pupila
        if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 115)) ** 2) < 5) {
          this.setPixel(imageData, x, y, 0, 0, 0, 255);
        }
      }
    }

  // Oreja izquierda
for (let y = centerY - 140; y < centerY - 100; y++) {
  for (let x = centerX - 90; x < centerX - 60; x++) {
    let distance = Math.sqrt((x - (centerX - 75)) ** 2 + (y - (centerY - 120)) ** 2);
    if (distance < 10 || (distance < 15 && y < centerY - 120)) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255); // Color carne para las orejas
    }
  }
}

// Oreja derecha
for (let y = centerY - 140; y < centerY - 100; y++) {
  for (let x = centerX + 60; x < centerX + 90; x++) {
    let distance = Math.sqrt((x - (centerX + 75)) ** 2 + (y - (centerY - 120)) ** 2);
    if (distance < 10 || (distance < 15 && y < centerY - 120)) {
      this.setPixel(imageData, x, y, 255, 218, 185, 255); // Color carne para las orejas
    }
  }
}


    // Nariz mejorada
    const noseStartX = centerX - 10;
    const noseEndX = centerX + 10;
    const noseStartY = centerY - 110;
    const noseEndY = centerY - 90;

    for (let y = noseStartY; y <= noseEndY; y++) {
      for (let x = noseStartX; x <= noseEndX; x++) {
        const distance = Math.abs(x - centerX);
        const gradient = (y - noseStartY) / (noseEndY - noseStartY);
        const colorFactor = Math.floor(204 - gradient * 50); // Gradiente de color para dar profundidad

        if (distance < (y - noseStartY) / 2) {
          this.setPixel(imageData, x, y, 255, colorFactor, 153, 255); // Color piel con gradiente
        }
      }
    }

    // Boca
    const mouthWidth = 60;
    const mouthHeight = 20;
    const mouthCenterX = centerX;
    const mouthCenterY = centerY - 70;

    for (let y = mouthCenterY - mouthHeight / 2; y <= mouthCenterY + mouthHeight / 2; y++) {
      for (let x = mouthCenterX - mouthWidth / 2; x <= mouthCenterX + mouthWidth / 2; x++) {
        if (((x - mouthCenterX) ** 2) / (mouthWidth / 2) ** 2 + ((y - mouthCenterY) ** 2) / (mouthHeight / 2) ** 2 < 1) {
          this.setPixel(imageData, x, y, 255, 0, 0, 255); // Color rojo para la boca
        }
      }
    }

    // Cabello negro mejorado
    const hairStartY = headCenterY - headHeight / 2 - 20;
    const hairEndY = headCenterY - headHeight / 2;
    const hairStartX = headCenterX - headWidth / 2;
    const hairEndX = headCenterX + headWidth / 2;


    // Cabello que se amolda a la cabeza
    for (let y = hairStartY; y <= hairEndY + 20; y++) {
      for (let x = hairStartX; x <= hairEndX; x++) {
        if (((x - headCenterX) ** 2) / (headWidth / 2) ** 2 + ((y - headCenterY) ** 2) / (headHeight / 2) ** 2 < 1) {
          this.setPixel(imageData, x, y, 0, 0, 0, 255); // Color negro para el cabello
        }
      }
    }
// Cuello con mejor forma y posición
for (let y = centerY - 30; y < centerY ; y++) { // Ajuste en la posición vertical
  for (let x = centerX - 20 - (y - (centerY - 50)) / 2; x < centerX + 20 + (y - (centerY - 50)) / 2; x++) { // Ajuste en la forma
    this.setPixel(imageData, x, y, 255, 218, 185, 255); // Color carne para el cuello
  }
}
// Torso proporcional
for (let y = centerY - 20; y < centerY + 120; y++) { // Altura del torso
  for (let x = centerX - 50; x < centerX + 50; x++) { // Ancho del torso
    this.setPixel(imageData, x, y, 0, 0, 0, 255); // Color negro para el torso
  }
}




  }
}

  
