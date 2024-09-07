
import { Component, ElementRef, HostListener } from '@angular/core';

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
  test!: Touch;


   leftPaddleY = 200;
  rightPaddleY = 200;
/* Assuming a two-finger touch
TouchEvent.touches = [
  {
    "identifier": 1,
    "target": HTMLDivElement,
    "screenX": 100,
    "screenY": 200,
    "clientX": 50,
    "clientY": 100,
    "pageX": 50,
    "pageY": 100,
    "radiusX": 5,
    "radiusY": 5,
    "rotationAngle": 0,
    "force": 1
  },
  {
    "identifier": 2,
    "target": HTMLDivElement,
    "screenX": 300,
    "screenY": 400,
    "clientX": 250,
    "clientY": 300,
    "pageX": 250,
    "pageY": 300,
    "radiusX": 5,
    "radiusY": 5,
    "rotationAngle": 0,
    "force": 1
  }
];*/


  @HostListener('touchstart',['$event'])
  tactilPaleta1Abajo(evento: TouchEvent){ this.changePaddle1(50); 
                                        this.test = evento.touches[0];
                                        }
  
  @HostListener('window:keydown.s', ['$event'])
  moverPaleta1Abajo(){ this.changePaddle1(50); }
  @HostListener('window:keydown.w', ['$event'])
  moverPaleta1Arriba(){ this.changePaddle1(-50); }

  @HostListener('window:keydown.l', ['$event'])
  moverPaleta2Abajo(){ this.changePaddle2(50); }
  @HostListener('window:keydown.o', ['$event'])
  moverPaleta2Arriba(){ this.changePaddle2(-50); }

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
    this.ctx.rect(this.canvas.width - this.paddleWidth, this.paddle2Y, this.paddleWidth, 100);
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
    if(this.ballX <= this.paddleWidth && this.ballY <= this.paddle1Y + 50 && this.ballY >= this.paddle1Y - 50) {
       this.paddleColission = true;
    }
    if(this.ballX >= (this.canvas.width - (this.paddleWidth + 10)) && this.ballY <= this.paddle2Y + 50 && this.ballY >= this.paddle2Y - 50) {
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


