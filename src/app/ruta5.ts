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
  
  constructor(public servicio:nombreService){
    this.prueba = servicio.enlace;
    this.iframe = document.getElementById("vid");
    this.iframe.autoplay = true;
    
}
  
 metodo() {
 
   
  }
   

}
