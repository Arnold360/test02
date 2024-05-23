import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta6',
  templateUrl: './ruta6.html',
  styleUrls: ['./ruta6.css'],
  
})
export class ruta4 implements AfterViewInit {
  

  
  
  
  
  constructor(private sanitizer:DomSanitizer, public nombreservice:nombreService){
    
  
    }
    

   ngAfterViewInit() {
    this.element = document.getElementsByClassName("elemento") as HTMLCollection;
    this.prueba = this.element.length;
    this.cambiarEnlace(this.nombreservice.entrevistas.length - 1);
     }
  

   cambiarEnlace(i:number){
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.entrevistas[i].url);
     this.nombreservice.enlaceYt = this.nombreservice.entrevistas[i].urlYt;
     this.nombreservice.titulo = this.nombreservice.tituloEntrevistas[i];
     this.nombreservice.destacado = this.nombreservice.destacadoEntrevistas[i];
     
     
   }
  

}
