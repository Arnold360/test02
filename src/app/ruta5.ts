import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, SkipSelf } from '@angular/core';
import { nombreService } from './nombreService';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  
})
export class ruta5 {
  
  video:any;
  prueba:SafeUrl;
  
  constructor(public servicio:nombreService){
    this.prueba = servicio.enlace;
    this.video = document.getElementById("vid").contentWindow.document.body.getElementsByTagName('video')[0];
  } 
}
