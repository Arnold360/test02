import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta6',
  templateUrl: './ruta6.html',
  styleUrls: ['./ruta6.css'],
  
})
export class ruta6 implements AfterViewInit {
  
  elementoColoreado:HTMLElement;
  elementoVideo:HTMLElement;
  
  
  
  
  constructor(private sanitizer:DomSanitizer, public nombreservice:nombreService){
    
  
    }
    changeLinkColor(i:number) {
            this.elementoColoreado = document.getElementById("enlace" + i);
            this.elementoColoreado.style.color = "red";
        }

  resetLinkColor() {
            this.elementoColoreado.style.color = "purple";
        }    

   ngAfterViewInit() {
    this.elementoVideo = document.getElementById("video");
    this.elementoColoreado = document.getElementById("enlace" +  (this.nombreservice.etnonacionalismo.length - 1));
    this.cambiarEnlace(this.nombreservice.etnonacionalismo.length - 1);
     }
  

   cambiarEnlace(i:number){
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.etnonacionalismo[i].url);
     this.nombreservice.enlaceYt = this.nombreservice.etnonacionalismo[i].urlYt;
     this.nombreservice.nombre = this.nombreservice.etnonacionalismo[i].nombre;
     this.nombreservice.titulo = this.nombreservice.titulosEtnonacionalismo[i];
     this.nombreservice.destacado = this.nombreservice.destacadosEtnonacionalismo[i];
     this.resetLinkColor();
     this.changeLinkColor(i);
     setTimeout(() => { this.elementoVideo.scrollIntoView({behavior: 'smooth'}); }, 1000 );
     
   }
  

}
