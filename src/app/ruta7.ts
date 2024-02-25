import {Component, ViewChild, ElementRef, AfterViewInit} from "@angular/core";


@Component({selector:"ruta7",
            templateUrl:"./ruta7.html"
            })

  
export class ruta7 implements AfterViewInit {

  button = document.getElementById('play');
  
  startTime:number = 3;
  endTime:number = 10;
  duration:number = 2000;
  currentTime!:number;
  constructor(){ 
 

  }
   evento(e:any, avideo:any){
       this.currentTime = avideo.currentTime;
   }
  
   onMetadata(e:any, avideo:any) {
       this.duration = 1000;
       this.currentTime = avideo.currentTime;
       console.log('metadata: ', e);
       console.log('duration:  ', this.duration = avideo.duration);
       setTimeout(this.onMetadata, 3000, e, avideo);
     }
     

  ngAfterViewInit() {
   
  }

  /*checkTime() {
      if (this.video.currentTime >= this.endTime) { 
         this.video.pause();
        } else {
            call checkTime every 1/10th 
              second until endTime 
           setTimeout(this.checkTime, 100);
        }
    }
 pausa(){
   this.video.pause();
 }
  
 playVideo() {


    this.video.currentTime = this.startTime;
    this.video.play();
    this.checkTime();
}*/
}
