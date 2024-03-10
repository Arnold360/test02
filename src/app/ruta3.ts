import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta3',
  templateUrl: './ruta3.html',
  styleUrls: ['./ruta3.css'],
  
})
export class ruta3 implements AfterViewInit {

  videoActual:string = "";
  indice:number = 0;
  rutas:string[] = []; 
  element!:HTMLCollection; 
  prueba!:number;
  prueba2!:number;
  prueba3:string= "https://www.youtube.com/embed/HfCjXPMj5VA?si=WcMHdlsjn3uzewKo";
  
  
  constructor(private sanitizer:DomSanitizer, public nombreservice:nombreService){
    
    for (let i = 0; nombreservice.entrevistas.length > i; i++){
      this.rutas.push("ruta" + i.toString());  
      }
    }
    

   ngAfterViewInit() {
    this.element = document.getElementsByClassName("elemento") as HTMLCollection;
    this.prueba = this.element.length;
  }

   cambiarEnlace(i:number){
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.mitines[i].url);
     this.nombreservice.nombre = this.nombreservice.mitines[i].nombre;
     this.nombreservice.enlaceYt = this.nombreservice.mitines[i].urlYt;
     this.nombreservice.destacado = this.nombreservice.destacadoMitines[i];
     
   }
  

}
