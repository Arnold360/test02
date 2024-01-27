import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, SkipSelf } from '@angular/core';
import { nombreService } from './nombreService';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  
})
export class ruta5 {
  
  
  prueba:SafeUrl;
  
  constructor( private sanitizer:DomSanitizer, public servicio:nombreService){
    this.prueba = sanitizer.bypassSecurityTrustResourceUrl(servicio.enlace);
  } 
}
