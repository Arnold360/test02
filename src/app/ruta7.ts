import {Component} from "@angular/core";


@Component({selector:"ruta7",
            templateUrl:"./ruta7.html"
            })

  
export class ruta7 {
  button:HTMLElement = document.getElementById('play');
  video:HTMLElement = document.getElementById('video');
  startTime:number = 10;
  endTime:number = 20;
;

  constructor(){ 
  this.button.addEventListener('click', this.playVideo) }

 playVideo() {

    checkTime() {
        if (this.video.currentTime >= this.endTime) {
           this.video.pause();
        } else {
           /* call checkTime every 1/10th 
              second until endTime */
           setTimeout(checkTime, 100);
        }
    }
 }

    this.video.currentTime = this.startTime;
    this.video.play();
    checkTime();
}
