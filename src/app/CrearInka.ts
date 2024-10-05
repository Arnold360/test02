export class CrearInka {

  canvasInka!:HTMLCanvasElement;
  ctxInka!:CanvasRenderingContext2D;
  imgData!:ImageData;



  constructor(){
    
  }
   // Función para establecer un píxel en la imagen
   setPixel(imageData:ImageData, x:number, y:number, r:number, g:number, b:number, a:number) {
            let index = (x + y * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }

  drawInka(imageData:ImageData){
  
        const centerX = 400;
        const centerY = 300;
        const headRadius = 50;
        const bodyWidth = 100;
        const bodyHeight = 200;
        // Cabeza ovalada
        const headWidth = 200; // Ancho de la cabeza
        const headHeight = 250; // Altura de la cabeza

for (let y = centerY - headHeight / 2; y <= centerY + headHeight / 2; y++) {
  for (let x = centerX - headWidth / 2; x <= centerX + headWidth / 2; x++) {
    if (((x - centerX) ** 2) / (headWidth / 2) ** 2 + ((y - centerY) ** 2) / (headHeight / 2) ** 2 < 1) {
      this.setPixel(imageData, x, y, 255, 204, 153, 255); // Color piel
    }
  }
}

// Left Eyebrow
for (let x = centerX - 50; x < centerX - 10; x++) {
  let y = centerY - 150 - Math.sin((x - (centerX - 50)) * Math.PI / 40) * 10;
  for (let offsetY = -1; offsetY <= 1; offsetY++) {
    this.setPixel(imageData, x, Math.round(y + offsetY), 0, 0, 0, 255); // Black color for the eyebrows
  }
}

// Right Eyebrow
for (let x = centerX + 10; x < centerX + 50; x++) {
  let y = centerY - 150 - Math.sin((x - (centerX + 10)) * Math.PI / 40) * 10;
  for (let offsetY = -1; offsetY <= 1; offsetY++) {
    this.setPixel(imageData, x, Math.round(y + offsetY), 0, 0, 0, 255); // Black color for the eyebrows
  }
}

// Left Eye
for (let y = centerY - 130; y < centerY - 100; y++) {
  for (let x = centerX - 50; x < centerX - 10; x++) {
    // White of the eye
    if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 115)) ** 2) < 15) {
      this.setPixel(imageData, x, y, 255, 255, 255, 255);
    }

    // Iris
    if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 115)) ** 2) < 10) {
      this.setPixel(imageData, x, y, 0, 100, 255, 255);
    }

    // Pupil
    if (Math.sqrt((x - (centerX - 30)) ** 2 + (y - (centerY - 115)) ** 2) < 5) {
      this.setPixel(imageData, x, y, 0, 0, 0, 255);
    }
  }
}

// Right Eye
for (let y = centerY - 130; y < centerY - 100; y++) {
  for (let x = centerX + 10; x < centerX + 50; x++) {
    // White of the eye
    if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 115)) ** 2) < 15) {
      this.setPixel(imageData, x, y, 255, 255, 255, 255);
    }

    // Iris
    if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 115)) ** 2) < 10) {
      this.setPixel(imageData, x, y, 0, 100, 255, 255);
    }

    // Pupil
    if (Math.sqrt((x - (centerX + 30)) ** 2 + (y - (centerY - 115)) ** 2) < 5) {
      this.setPixel(imageData, x, y, 0, 0, 0, 255);
    }
  }
}


// Cuerpo
for (let y = centerY - 70; y < centerY + 70; y++) {
  for (let x = centerX - 50; x < centerX + 50; x++) {
    this.setPixel(imageData, x, y, 0, 0, 0, 255);
  }
}


            // Cabeza
          /*  for (let y = 0; y < imageData.height; y++) {
                for (let x = 0; x < imageData.width; x++) {
                    const dx = x - centerX;
                    const dy = y - (centerY - bodyHeight / 2 - headRadius);
                    if (dx * dx + dy * dy <= headRadius * headRadius) {
                        this.setPixel(imageData, x, y, 0, 0, 0, 255); // Negro para la silueta
                    }
                }
            }*/

            // Cuerpo
            for (let y = centerY - bodyHeight / 2; y < centerY + bodyHeight / 2; y++) {
                for (let x = centerX - bodyWidth / 2; x < centerX + bodyWidth / 2; x++) {
                    this.setPixel(imageData, x, y, 0, 0, 0, 255); // Negro para la silueta
                }
            }

            // Brazos
            for (let y = centerY - bodyHeight / 4; y < centerY + bodyHeight / 4; y++) {
                for (let x = centerX - bodyWidth; x < centerX - bodyWidth / 2; x++) {
                    this.setPixel(imageData, x, y, 0, 0, 0, 255); // Brazo izquierdo
                }
                for (let x = centerX + bodyWidth / 2; x < centerX + bodyWidth; x++) {
                    this.setPixel(imageData, x, y, 0, 0, 0, 255); // Brazo derecho
                }
            }

            // Piernas
            for (let y = centerY + bodyHeight / 2; y < centerY + bodyHeight; y++) {
                for (let x = centerX - bodyWidth / 4; x < centerX; x++) {
                    this.setPixel(imageData, x, y, 0, 0, 0, 255); // Pierna izquierda
                }
                for (let x = centerX; x < centerX + bodyWidth / 4; x++) {
                    this.setPixel(imageData, x, y, 0, 0, 0, 255); // Pierna derecha
                }
            }

           /* // Detalles adicionales para mayor realismo
            // Sombras en la cabeza
            for (let y = 0; y < imageData.height; y++) {
                for (let x = 0; x < imageData.width; x++) {
                    const dx = x - centerX;
                    const dy = y - (centerY - bodyHeight / 2 - headRadius);
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance <= headRadius) {
                        const shade = Math.max(0, 255 - distance * 2);
                        this.setPixel(imageData, x, y, shade, shade, shade, 255); // Sombras en la cabeza
                    }
                }
            }*/

            // Sombras en el cuerpo
            for (let y = centerY - bodyHeight / 2; y < centerY + bodyHeight / 2; y++) {
                for (let x = centerX - bodyWidth / 2; x < centerX + bodyWidth / 2; x++) {
                    const shade = Math.max(0, 255 - (y - (centerY - bodyHeight / 2)) * 0.5);
                    this.setPixel(imageData, x, y, shade, shade, shade, 255); // Sombras en el cuerpo
                }
            }

           /* // Detalles en el tocado
            for (let y = 100; y < 150; y++) {
                for (let x = 300; x < 500; x++) {
                    this.setPixel(imageData, x, y, 255, 204, 0, 255); // Color dorado
                }
            }

            // Adornos en el tocado
            for (let y = 110; y < 120; y++) {
                for (let x = 320; x < 330; x++) {
                    this.setPixel(imageData, x, y, 255, 0, 0, 255); // Adorno rojo
                }
                for (let x = 470; x < 480; x++) {
                    this.setPixel(imageData, x, y, 0, 0, 255, 255); // Adorno azul
                }
            }*/
        }

  
}
