
// tennis-game.component.ts
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'juego',
  templateUrl: './juego.html',
  styleUrls: ['./juego.css'],
})
export class Juego {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private ballX = 300;
  private ballY = 200;
  private ballSpeedX = 5;
  private ballSpeedY = 5;

  private paddle1Y = 150;
  private paddle2Y = 150;
  paddleWidth: number = 20;
  paddleColission: boolean = false;
  

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.canvas = this.elementRef.nativeElement.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    setInterval(() => {
      this.clearCanvas();
      this.drawBall();
      this.drawPaddles();
      this.colission();
      this.updateBallPosition();
      this.paddleColission = false;
    }, 16);
  }

  private clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.ballX, this.ballY, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
  }

  private drawPaddles() {
    this.ctx.beginPath();
    this.ctx.rect(0, this.paddle1Y, this.paddleWidth, 100);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.rect(this.canvas.width - this.paddleWidth, this.paddle2Y, 10, 100);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
  }
  
  changePaddle1(n: number) {
     this.paddle1Y += n;
  }
  changePaddle2(n: number) {
    this.paddle2Y += n;
  }
  colission() {
    if(this.ballX <= this.paddleWidth && (this.ballY <= this.paddle1Y + 50 || this.ballY >= this.paddle1Y - 50)) {
       this.paddleColission = true;
    }
    if(this.ballX >= this.canvas.width - (this.paddleWidth + 10) && (this.ballY <= this.paddle2Y + 50 || this.ballY >= this.paddle2Y - 50)) {
       this.paddleColission = true;
    }
    
  }

  private updateBallPosition() {
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;
    
    if (this.ballY <= 0 || this.ballY >= this.canvas.height - 10) {
      this.ballSpeedY *= -1;
    }
    
    if (this.ballX <= 0 || this.ballX >= this.canvas.width - 10 || this.paddleColission) {
      this.ballSpeedX *= -1;
    }
  }
      
}


