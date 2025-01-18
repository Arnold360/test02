
import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { webSocketService } from './websocket.service';
import { CrearInka } from './CrearInka';

@Component({
  selector: 'juego',
  templateUrl: './juego.html',
  styleUrls: ['./juego.css'],
})
export class Juego implements OnInit, OnDestroy {
 
  public leftPaddleY = 25;
  public rightPaddleY = 25;
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
  canvasInka!:HTMLCanvasElement;
  ctxInka!:CanvasRenderingContext2D;
  imgData!:ImageData;
  CrearInka!:any;
  cordenada!:number;
  cordenada2!:number;
  cordenada3!:number;
  
  
  

  constructor(private websocketService: webSocketService) { }

  ngOnInit(): void {
  this.initializeSocketConnection();
  
 }

 ngOnDestroy() {
  this.disconnectSocket();
 }

  // Initializes socket connection
 initializeSocketConnection() {
  this.websocketService.connectSocket('message');
 }

 // Receives response from socket connection 
 receiveSocketResponse() {
  this.websocketService.receiveStatus().subscribe((receivedMessage: unknown) => {
   console.log(receivedMessage);
  });
 }

 // Disconnects socket connection
 disconnectSocket() {
  this.websocketService.disconnectSocket();
 }

 @HostListener('window:touchstart', ['$event'])
  onTouch(event: TouchEvent) {
    const touch = event.touches[0];
    const courtRect = (event.target as HTMLElement).getBoundingClientRect();
    const touchX = touch.clientX - courtRect.left;
    const touchY = touch.clientY + (this.courtRect2.top - courtRect.top);
    
    this.cordenada = courtRect.top;
    this.cordenada2 = touch.clientY;
    this.cordenada3 = touch.clientY - courtRect.top;

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

 
  animate(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, lastTime: number = 0) {
    const now = performance.now();
    const deltaTime = (now - lastTime) / 1000; // Convertir a segundos
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawCourt();
    this.drawSilverBall(ctx, this.x, this.y, this.radius);
  // Dibujar las paletas realistas
    this.drawRealisticPaddle(ctx, 10, this.leftPaddleY / 5 , 4, 20); // Paleta izquierda
    this.drawRealisticPaddle(ctx, canvas.width - 20, this.rightPaddleY, 4, 20); // Paleta derecha
     /*this.CrearInka.animatePupils();*/
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
  ctx.strokeRect(x, y , width, height);

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
   /* this.canvasInka = document.getElementById('inka') as HTMLCanvasElement;
    this.ctxInka = this.canvasInka.getContext('2d');
    this.imgData = this.ctxInka.createImageData(800, 600);
    this.CrearInka = new CrearInka(this.ctxInka);
    this.CrearInka.drawInka(this.imgData);
    this.ctxInka.putImageData(this.imgData, 0, 0);*/
    this.canvas = document.getElementById('tennisCourt')! as HTMLCanvasElement;
    this.courtRect2 = this.canvas.getBoundingClientRect();
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
      const wallWidth = width;
      const wallHeight = height;
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


}

