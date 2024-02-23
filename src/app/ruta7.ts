import {Component} from "@angular/core";


@Component({selector:"ruta7",
            templateUrl:"./ruta7.html"
            })

  
export class ruta7 {

    button = document.getElementById('play');
  video =  <HTMLVideoElement> document.getElementById('video');
  startTime:number = 10;
  endTime:number = 20;
  
  
  
  constructor(){ 
 

  }

  

  checkTime() {
        if (this.video.currentTime >= this.endTime) {
           this.video.pause();
        } else {
           /* call checkTime every 1/10th 
              second until endTime */
           setTimeout(this.checkTime, 100);
        }
    }

 playVideo() {

   
    this.checkTime();

    this.video.currentTime = this.startTime;
    this.video.play();
    this.checkTime();
}
}
