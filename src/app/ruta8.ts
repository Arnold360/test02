import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta8',
  templateUrl: './ruta8.html',
  styleUrls: ['./ruta8.css'],
  
})
export class ruta8 implements AfterViewInit {

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
    this.elementoColoreado = document.getElementById("enlace" + (this.nombreservice.exposiciones.length - 1));
    this.cambiarEnlace(this.nombreservice.exposiciones.length - 1);
     }
  

   cambiarEnlace(i:number){
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.exposiciones[i].url);
     this.nombreservice.enlaceYt = this.nombreservice.exposiciones[i].urlYt;
     this.nombreservice.titulo = this.nombreservice.tituloExposiciones[i];
     this.nombreservice.destacado = this.nombreservice.destacadoExposiciones[i];
     this.resetLinkColor();
     this.changeLinkColor(i);
     setTimeout(() => { this.elementoVideo.scrollIntoView({behavior: 'smooth'}); }, 1000 );
   }
     
   }
  

}
