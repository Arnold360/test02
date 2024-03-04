import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, SkipSelf, AfterViewInit, OnInit } from '@angular/core';
import { nombreService } from './nombreService';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  
})
export class ruta5 implements OnInit {
  
  iframe!:any;
  video!:any;
  
  button:HTMLElement = document.getElementById('play');
  endTime:number = 20;
  startTime:number = 10;
  
  constructor(public servicio:nombreService){
   
 
    
   }
  
  ngOnInit() {
    this.tag = document.createElement('script');
    this.tag.src = "https://www.youtube.com/player_api";
    document.body.appendChild(this.tag);
  }

 
   

}
