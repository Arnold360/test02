
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'juego',
  templateUrl: './juego.html',
  styleUrls: ['./juego.css'],
})
export class Juego {
 
  public leftPaddleY = 50;
  public rightPaddleY = 50;
  ballSpeedX = 2;
  ballSpeedY = 2;
  leftScore = 0;
  rightScore = 0;
  canvas!:HTMLCanvasElement;
  ctx!:CanvasRenderingContext2D;
  x: number;
  y: number;
  radius = 15;
  dx = 200;
  dy = 200;
  
 @HostListener('window:touchstart', ['$event'])
  onTouch(event: TouchEvent) {
    const touch = event.touches[0];
    const courtRect = (event.target as HTMLElement).getBoundingClientRect();
    const touchX = touch.clientX - courtRect.left;
    const touchY = touch.clientY - courtRect.top;

    if (touchX < courtRect.width / 2) {
      this.movePaddle('left', touchY);
    } else {
      this.movePaddle('right', touchY);
    }
  }

   movePaddle(side: 'left' | 'right', y: number) {
    if (side === 'left') {
      this.leftPaddleY = y - 25; // Center the paddle on the touch point
    } else {
      this.rightPaddleY = y - 25;
    }
  }

   ngOnInit() {
   
   }
 drawInka(){
  
        const canvas = document.getElementById('inka') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        const imgData = ctx.createImageData(800, 600);

        // Función para establecer un píxel en la imagen
        function setPixel(imageData:ImageData, x:number, y:number, r:number, g:number, b:number, a:number) {
            const index = (x + y * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }

        // Dibujar una figura simple (por ejemplo, un círculo para la cabeza)
        const centerX = 400;
        const centerY = 200;
        const radius = 100;

        for (let y = 0; y < imgData.height; y++) {
            for (let x = 0; x < imgData.width; x++) {
                const dx = x - centerX;
                const dy = y - centerY;
                if (dx * dx + dy * dy <= radius * radius) {
                    setPixel(imgData, x, y, 245, 198, 165, 255); // Color piel
                }
            }
        }

        ctx.putImageData(imgData, 0, 0);


     }
  
  
 animate(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, lastTime: number = 0) {
    const now = performance.now();
    const deltaTime = (now - lastTime) / 1000; // Convertir a segundos
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawCourt();
    this.drawSilverBall(ctx, this.x, this.y, this.radius);
  // Dibujar las paletas realistas
    this.drawRealisticPaddle(ctx, 10, this.leftPaddleY, 10, 50); // Paleta izquierda
    this.drawRealisticPaddle(ctx, canvas.width - 20, this.rightPaddleY, 10, 50); // Paleta derecha
    this.update(canvas, deltaTime);
    requestAnimationFrame(() => this.animate(ctx, canvas, now));
 }
  
 update(canvas: HTMLCanvasElement, deltaTime: number) {
    
    this.x += this.dx * deltaTime;
    this.y += this.dy * deltaTime;
   /* ajustar posicion de la pelota para que no pase demasiado el limite y
     evitar bugs*/
    if (this.x + this.radius > canvas.width) {
      this.x = canvas.width - (this.radius - 1);
    }
    if (this.x - this.radius < 0) {
      this.x = this.radius - 1;
    }
    if (this.y + this.radius > canvas.height) {
      this.y = canvas.height - (this.radius - 1);
    }
    if (this.y - this.radius < 0) {
      this.y = this.radius - 1;
    }
    // Check for collision with the walls
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  }
  
drawSilverBall(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
    const gradient = ctx.createRadialGradient(x, y, radius / 2, x, y, radius);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(0.3, 'silver');
    gradient.addColorStop(1, 'gray');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Add some highlights for a metallic effect
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(x - radius / 3, y - radius / 3, radius / 2, 0, Math.PI * 2);
    ctx.stroke();
  } 

 drawRealisticPaddle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
  // Dibujar el cuerpo de la paleta con un gradiente
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, '#8B4513'); // Marrón oscuro
  gradient.addColorStop(1, '#D2691E'); // Marrón claro

  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);

  // Dibujar el borde de la paleta
  ctx.strokeStyle = '#654321'; // Marrón más oscuro
  ctx.lineWidth = 5;
  ctx.strokeRect(x, y, width, height);

  // Dibujar sombras para dar un efecto 3D
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;

  // Dibujar el mango de la paleta
  ctx.fillStyle = '#A0522D'; // Marrón intermedio
  ctx.fillRect(x + width / 4, y + height, width / 2, height / 3);

  // Dibujar el borde del mango
  ctx.strokeStyle = '#654321';
  ctx.lineWidth = 3;
  ctx.strokeRect(x + width / 4, y + height, width / 2, height / 3);

  // Restablecer las sombras para no afectar otros dibujos
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}



   ngAfterViewInit() {
    this.drawInka();
    this.canvas = document.getElementById('tennisCourt')! as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.drawCourt();
    this.drawSilverBall(this.ctx, this.canvas.width / 2, this.canvas.height / 2, 10);
    this.animate(this.ctx, this.canvas);

  }

 drawCourt() {
    if (this.ctx) {
      const width = this.canvas.width;
      const height = this.canvas.height;
      // Draw bricks
      const wallWidth = 250;
      const wallHeight = 175;
      for (let y = 0; y < height; y += wallHeight) {
        for (let x = 0; x < width; x += wallWidth) {
          this.drawBrickWithGradient(this.ctx, x, y, wallWidth, wallHeight, 10, 14);
         }
       }
     }
   }
drawBrickWithGradient(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, rows: number, cols: number) {
  const brickWidth = width / cols;
  const brickHeight = height / rows;
  const mortar = 1; // Ancho del mortero
  const radius = 5; // Radio de las esquinas redondeadas

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const offsetX = (row % 2 === 0) ? 0 : brickWidth / 2;
      const brickX = x + col * brickWidth + offsetX;
      const brickY = y + row * brickHeight;

      // Gradiente de fondo y sombra
      const gradient = ctx.createLinearGradient(brickX, brickY, brickX + brickWidth, brickY + brickHeight);
      gradient.addColorStop(0, 'rgb(245, 196, 0)'); // Oro claro
      gradient.addColorStop(0.7, 'rgb(184, 134, 11)'); // Oro oscuro
      gradient.addColorStop(1, 'rgb(139, 69, 19)'); // Sombra oscura

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(brickX + radius + mortar, brickY + mortar);
      ctx.lineTo(brickX + brickWidth - radius - mortar, brickY + mortar);
      ctx.quadraticCurveTo(brickX + brickWidth - mortar, brickY + mortar, brickX + brickWidth - mortar, brickY + radius + mortar);
      ctx.lineTo(brickX + brickWidth - mortar, brickY + brickHeight - radius - mortar);
      ctx.quadraticCurveTo(brickX + brickWidth - mortar, brickY + brickHeight - mortar, brickX + brickWidth - radius - mortar, brickY + brickHeight - mortar);
      ctx.lineTo(brickX + radius + mortar, brickY + brickHeight - mortar);
      ctx.quadraticCurveTo(brickX + mortar, brickY + brickHeight - mortar, brickX + mortar, brickY + brickHeight - radius - mortar);
      ctx.lineTo(brickX + mortar, brickY + radius + mortar);
      ctx.quadraticCurveTo(brickX + mortar, brickY + mortar, brickX + radius + mortar, brickY + mortar);
      ctx.closePath();
      ctx.fill();
      /*ctx.fillRect(brickX + mortar, brickY + mortar, brickWidth - mortar * 2, brickHeight - mortar * 2);*/

      // Textura con ruido simplificada
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < brickWidth; i += 15) {
        for (let j = 0; j < brickHeight; j += 15) {
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
          ctx.fillRect(brickX + i + mortar, brickY + j + mortar, 2, 2);
        }
      }
      ctx.globalAlpha = 1.0;

      // Reflejo especular simplificado
      ctx.beginPath();
      ctx.moveTo(brickX + brickWidth * 0.2, brickY + brickHeight * 0.1);
      ctx.lineTo(brickX + brickWidth * 0.4, brickY + brickHeight * 0.1);
      ctx.lineTo(brickX + brickWidth * 0.3, brickY + brickHeight * 0.3);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fill();
    }
  }
}


  
/*drawBrickWithGradient(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
  // Gradiente de fondo y sombra
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, 'rgb(245, 196, 0)'); // Oro claro
  gradient.addColorStop(0.7, 'rgb(184, 134, 11)'); // Oro oscuro
  gradient.addColorStop(1, 'rgb(139, 69, 19)'); // Sombra oscura

  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);

  // Textura con ruido
  ctx.globalAlpha = 0.2;
  for (let i = 0; i < width; i += 5) {
    for (let j = 0; j < height; j += 5) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
      ctx.fillRect(x + i, y + j, 2, 2);
    }
  }
  ctx.globalAlpha = 1.0;

  // Reflejo especular
  ctx.beginPath();
  ctx.moveTo(x + width * 0.2, y + height * 0.1);
  ctx.lineTo(x + width * 0.4, y + height * 0.1);
  ctx.lineTo(x + width * 0.3, y + height * 0.3);
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.fill();
}*/

/** drawBrickWithGradient(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
    gradient.addColorStop(0, 'rgb(255, 215, 0)'); // Gold color
    gradient.addColorStop(1, 'rgb(184, 134, 11)'); // Darker gold for shadow

    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);

    // Optional: Add a border to each brick for better separation
    ctx.strokeStyle = 'rgb(139, 69, 19)'; // Dark brown color
    ctx.strokeRect(x, y, width, height);

   // Añadir un reflejo para simular el brillo del oro
    const highlightGradient = ctx.createLinearGradient(x, y, x + width, y + height);
    highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)'); // Blanco semi-transparente
    highlightGradient.addColorStop(0.3, 'rgba(255, 255, 255, 0)'); // Transparente

    ctx.fillStyle = highlightGradient;
    ctx.fillRect(x, y, width, height);

  // Añadir una sombra para dar más profundidad
    const shadowGradient = ctx.createLinearGradient(x, y, x + width, y + height);
    shadowGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0)'); // Transparente
    shadowGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)'); // Negro semi-transparente

    ctx.fillStyle = shadowGradient;
    ctx.fillRect(x, y, width, height);

   // Añadir textura para mayor realismo
    ctx.globalAlpha = 0.2; // Hacer la textura semi-transparente
    for (let i = 0; i < width; i += 5) {
      for (let j = 0; j < height; j += 5) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(x + i, y + j, 2, 2); // Pequeños puntos blancos
      }
    }
    ctx.globalAlpha = 1.0; // Restaurar la opacidad

 // Añadir reflejos especulares
    ctx.beginPath();
    ctx.moveTo(x + width * 0.1, y + height * 0.1);
    ctx.lineTo(x + width * 0.3, y + height * 0.1);
    ctx.lineTo(x + width * 0.2, y + height * 0.3);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
  }**/

}


