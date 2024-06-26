import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta8',
  templateUrl: './ruta8.html',
  styleUrls: ['./ruta8.css'],
  
})
export class ruta8 implements AfterViewInit {
  conferencias:string[] = ["CONFERENCIA EN LA PLAZA SAN MARTIN 2022","CONFERENCIA EN ANDAHUAYLAS 2022"];
  mitines:string[] = ["MITIN EN ANDAHUAYLAS 2022","MITIN EN CUSCO 2022"];
  entrevistas:string[] = ["ENTREVISTA WILLAX 2022","ENTREVISTA LA REPUBLICA 2023", "ENTREVISTA EN CUSCO 2023"];
  declaraciones:string[] = this.conferencias.concat(this.mitines).concat(this.entrevistas);
  videoActual:string = "";
  indice:number = 0;
  rutas:string[] = []; 
  element!:HTMLCollection; 
  prueba!:number;
  
  
  
  
  constructor(private sanitizer:DomSanitizer, public nombreservice:nombreService){
    
  
    }
    

   ngAfterViewInit() {
    this.element = document.getElementsByClassName("elemento") as HTMLCollection;
    this.prueba = this.element.length;
    this.cambiarEnlace(this.nombreservice.exposiciones.length - 1);
     }
  

   cambiarEnlace(i:number){
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.exposiciones[i].url);
     this.nombreservice.enlaceYt = this.nombreservice.exposiciones[i].urlYt;
     this.nombreservice.titulo = this.nombreservice.tituloExposiciones[i];
     this.nombreservice.destacado = this.nombreservice.destacadoExposiciones[i];
     
     
   }
  

}
