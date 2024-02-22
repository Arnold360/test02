import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, SkipSelf, AfterViewInit } from '@angular/core';
import { nombreService } from './nombreService';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  
})
export class ruta5 {
  
  iframe!:any;
  video!:any;
  prueba:SafeUrl;
  button:HTMLElement = document.getElementById('play');
  endTime:number = 20;
  startTime:number = 10;
  
  constructor(public servicio:nombreService){
    this.prueba = servicio.enlace;
    this.iframe = document.getElementById("vid") as HTMLIFrameElement;
    this.video = this.iframe.contentWindow.document.body.getElementsByClassName('video-stream html5-main-video')[0];
    this.button.addEventListener('click', this.playVideo); 
    
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
