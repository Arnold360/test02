
import { Component, OnInit } from '@angular/core';
import { nombreService } from './nombreService';
@Component({
  selector: 'ruta4',
  templateUrl: './ruta4.html',
  styleUrls: ['./ruta4.css'],
  providers: [nombreService]
})
export class ruta4 {
  conferencias:string[] = ["CONFERENCIA EN LA PLAZA SAN MARTIN 2022","CONFERENCIA EN ANDAHUAYLAS 2022"];
  mitines:string[] = ["MITIN EN ANDAHUAYLAS 2022","MITIN EN CUSCO 2022"];
  entrevistas:string[] = ["ENTREVISTA WILLAX 2022","ENTREVISTA LA REPUBLICA 2023", "ENTREVISTA EN CUSCO 2023"];
  declaraciones:string[] = this.conferencias.concat(this.mitines).concat(this.entrevistas);
  videoActual:string = "";
  indice:number = 0;
  rutas:string[] = []; 
  element:HTMLCollection = document.getElementsByClassName("elemento");
  prueba!:string;
  
  
  constructor(public nombreservice:nombreService){
    this.prueba = this.element.item(0).attributes.class;
    for (let i = 0; nombreservice.declaraciones.length > i; i++){
      this.rutas.push("ruta" + i.toString());  
      
    }

  }

      ngOnInit() {
     // Called after the constructor and called  after the first ngOnChanges() 
  } 
  
}
