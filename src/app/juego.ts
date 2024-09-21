
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'juego',
  templateUrl: './juego.html',
  styleUrls: ['./juego.css'],
})
export class Juego {



  public leftPaddleY = 250;
  public rightPaddleY = 250;
  public ballX = 390;
  public ballY = 290;
  ballSpeedX = 2;
  ballSpeedY = 2;
  leftScore = 0;
  rightScore = 0;
  canvas = document.getElementById('tennisCourt') as HTMLCanvasElement;
  ctx = this.canvas.getContext('2d')!;
  Ball: {canvasWidth:number, canvasHeight:number, radius:number, dx:number,
         dy:number} = {canvasWidth: this.canvas.width / 2, canvasHeight: this.canvas.height / 2, radius: 20, dx: 2,  dy: 2};


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
    this.startGame();
    
  }

startGame() {
  const gameLoop = () => {
    this.updateBallPosition();
    requestAnimationFrame(gameLoop);
  };
  gameLoop();
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

  

  updateBallPosition() {
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;

    // Check for collision with top and bottom walls
    if (this.ballY <= 0 || this.ballY >= window.innerHeight - 20) {
      this.ballSpeedY = -this.ballSpeedY;
    }

    // Check for collision with paddles
    if (this.ballX <= 20 && this.ballY >= this.leftPaddleY && this.ballY <= this.leftPaddleY + 100) {
      this.ballSpeedX = -this.ballSpeedX;
    } else if (this.ballX >= window.innerWidth - 40 && this.ballY >= this.rightPaddleY && this.ballY <= this.rightPaddleY + 100) {
      this.ballSpeedX = -this.ballSpeedX;
    }

    // Check for out of bounds
    if (this.ballX <= 0 || this.ballX >= window.innerWidth - 20) {
      this.resetBall();
    }
  }

  resetBall() {
  this.ballX = window.innerWidth / 2 - 10;
  this.ballY = window.innerHeight / 2 - 10;
  this.ballSpeedX = 2;
  this.ballSpeedY = 2;

  // Actualizar puntuación
  if (this.ballX <= 0) {
    this.rightScore++;
  } else if (this.ballX >= window.innerWidth - 20) {
    this.leftScore++;
  }
}

   ngAfterViewInit() {
    this.drawCourt();
  }

  drawCourt() {
    const canvas = document.getElementById('tennisCourt') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      const width = canvas.width;
      const height = canvas.height;
     

      // Draw bricks
      const brickWidth = 50;
      const brickHeight = 20;
      for (let y = 0; y < height; y += brickHeight) {
        for (let x = 0; x < width; x += brickWidth) {
          this.drawBrickWithGradient(ctx, x, y, brickWidth, brickHeight);
        }
      }
      // Draw silver tennis ball
      this.drawSilverBall(ctx, width / 2, height / 2, 10);

    }
  }

 drawBrickWithGradient(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
    gradient.addColorStop(0, 'rgb(255, 215, 0)'); // Gold color
    gradient.addColorStop(1, 'rgb(184, 134, 11)'); // Darker gold for shadow

    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);

    // Optional: Add a border to each brick for better separation
    ctx.strokeStyle = 'rgb(139, 69, 19)'; // Dark brown color
    ctx.strokeRect(x, y, width, height);
  }

  


 
}


