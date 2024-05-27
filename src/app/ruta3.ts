import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta3',
  templateUrl: './ruta3.html',
  styleUrls: ['./ruta3.css'],
  
})
export class ruta3 implements AfterViewInit {

  
  
  constructor(private sanitizer:DomSanitizer, public nombreservice:nombreService){
    
    for (let i = 0; nombreservice.mitines.length > i; i++){
      this.rutas.push("ruta" + i.toString());  
      }
    }
    

   ngAfterViewInit() {
    
    this.cambiarEnlace(this.nombreservice.mitines.length - 1);
  }

   cambiarEnlace(i:number){
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.mitines[i].url);
     this.nombreservice.nombre = this.nombreservice.mitines[i].nombre;
     this.nombreservice.enlaceYt = this.nombreservice.mitines[i].urlYt;
     this.nombreservice.destacado = this.nombreservice.destacadoMitines[i];
     
   }
  

}
