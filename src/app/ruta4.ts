import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta4',
  templateUrl: './ruta4.html',
  styleUrls: ['./ruta4.css'],
  
})
export class ruta4 implements AfterViewInit {
  conferencias:string[] = ["CONFERENCIA EN LA PLAZA SAN MARTIN 2022","CONFERENCIA EN ANDAHUAYLAS 2022"];
  mitines:string[] = ["MITIN EN ANDAHUAYLAS 2022","MITIN EN CUSCO 2022"];
  entrevistas:string[] = ["ENTREVISTA WILLAX 2022","ENTREVISTA LA REPUBLICA 2023", "ENTREVISTA EN CUSCO 2023"];
  declaraciones:string[] = this.conferencias.concat(this.mitines).concat(this.entrevistas);
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
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.entrevistas[i].url);
     this.nombreservice.nombre = this.nombreservice.entrevistas[i].nombre;
     this.prueba2 = i;
   
     
   }
  

}
