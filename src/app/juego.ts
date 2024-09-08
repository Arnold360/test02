
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'juego',
  templateUrl: './juego.html',
  styleUrls: ['./juego.css'],
})
export class Juego {



  leftPaddleY = 200;
  rightPaddleY = 200;
  ballX = 390;
  ballY = 290;
  ballSpeedX = 2;
  ballSpeedY = 2;




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
    setInterval(() => {
      this.updateBallPosition();
    }, 16); // Approximately 60 frames per second
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
  }


 
      
}


