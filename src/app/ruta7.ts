import {Component, ViewChild, ElementRef} from "@angular/core";


@Component({selector:"ruta7",
            templateUrl:"./ruta7.html"
            })

  
export class ruta7 {

  button = document.getElementById('play');
  
  startTime:number = 3;
  endTime:number = 10;
  
  @ViewChild("video")
   video: ElementRef;

 
  
  constructor(){ 
 

  }

  ngAfterViewInit() {
    this.video.nativeElement.muted = true;
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
