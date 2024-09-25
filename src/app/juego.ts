
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'juego',
  templateUrl: './juego.html',
  styleUrls: ['./juego.css'],
})
export class Juego {
 
  public leftPaddleY = 250;
  public rightPaddleY = 250;
  ballSpeedX = 2;
  ballSpeedY = 2;
  leftScore = 0;
  rightScore = 0;
  canvas!:HTMLCanvasElement;
  ctx!:CanvasRenderingContext2D;
  x: number;
  y: number;
  radius = 20;
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
      this.leftPaddleY = y - 50; // Center the paddle on the touch point
    } else {
      this.rightPaddleY = y - 50;
    }
  }

   ngOnInit() {
   
   }

 animate(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, lastTime: number = 0) {
    const now = performance.now();
    const deltaTime = (now - lastTime) / 1000; // Convertir a segundos
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawCourt();
    this.drawSilverBall(ctx, this.x, this.y, this.radius);
    this.update(canvas, deltaTime);
    requestAnimationFrame(() => this.animate(ctx, canvas, now));
 }
  
 update(canvas: HTMLCanvasElement, deltaTime: number) {
    
    this.x += this.dx * deltaTime;
    this.y += this.dy * deltaTime;
    if (this.x + this.radius > canvas.width) {
      this.x = canvas.width - (this.radius - 5);
    }
    if (this.y + this.radius > canvas.height) {
      this.y = canvas.height - (this.radius - 5);
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

  



   ngAfterViewInit() {
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
      const brickWidth = 100;
      const brickHeight = 40;
      for (let y = 0; y < height; y += brickHeight) {
        for (let x = 0; x < width; x += brickWidth) {
          this.drawBrickWithGradient(this.ctx, x, y, brickWidth, brickHeight);
         }
       }
     }
   }

drawBrickWithGradient(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
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
}

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


