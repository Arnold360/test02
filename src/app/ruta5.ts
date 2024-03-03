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
    
 
    
   }
  
 

 
   

}
