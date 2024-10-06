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
    const centerX = 400;
    const centerY = 300;
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
  }
}
