import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { nombreService } from './nombreService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ruta4',
  templateUrl: './ruta4.html',
  styleUrls: ['./ruta4.css'],
  
})
export class ruta4 implements AfterViewInit, OnInit {
  conferencias:string[] = ["CONFERENCIA EN LA PLAZA SAN MARTIN 2022","CONFERENCIA EN ANDAHUAYLAS 2022"];
  mitines:string[] = ["MITIN EN ANDAHUAYLAS 2022","MITIN EN CUSCO 2022"];
  entrevistas:string[] = ["ENTREVISTA WILLAX 2022","ENTREVISTA LA REPUBLICA 2023", "ENTREVISTA EN CUSCO 2023"];
  declaraciones:string[] = this.conferencias.concat(this.mitines).concat(this.entrevistas);
  videoActual:string = "";
  indice:number = 0;
  rutas:string[] = []; 
  elementoVideo:HTMLElement; 
  elementoColoreado:HTMLElement;
  
 
  
  

  
  constructor(private sanitizer:DomSanitizer,
              public nombreservice:nombreService) {
  
  
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
    this.elementoColoreado = document.getElementById("enlace" + (this.nombreservice.entrevistas.length - 1));
    setTimeout(() => { this.cambiarEnlace(this.nombreservice.entrevistas.length - 1); }, 1000 );
        }
  
  ngOnInit() {

    
    
        }
  
   cambiarEnlace(i:number){
     this.nombreservice.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(this.nombreservice.entrevistas[i].url);
     this.nombreservice.nombre = this.nombreservice.entrevistas[i].nombre;
     this.nombreservice.enlaceYt = this.nombreservice.entrevistas[i].urlYt;
     this.nombreservice.titulo = this.nombreservice.tituloEntrevistas[i];
     this.nombreservice.destacado = this.nombreservice.destacadoEntrevistas[i];
     this.resetLinkColor();
     this.changeLinkColor(i);
     setTimeout(() => { this.elementoVideo.scrollIntoView({ block: "start", 
                                                           inline: "center",
                                                         behavior: "smooth" }); }, 800);
   }
  

}
