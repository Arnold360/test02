import {Component} from "@angular/core";


@Component({selector:"ruta7",
            templateUrl:"./ruta7.html"
            })

  
export class ruta7 {

    button = document.getElementById('play');
  video =  <HTMLVideoElement> document.getElementById('video');
  startTime:number = 3;
  endTime:number = 10;
  
  
  
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


    this.video.currentTime = this.startTime;
    this.video.play();
    this.checkTime();
}
}
