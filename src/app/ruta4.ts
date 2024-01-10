
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
  Nombre:string[] = [ "a","b","c"];
  test!:nombreService;

  
  constructor(public nombreservice:nombreService){
    this.test = nombreservice;
    for (let i = 0; this.declaraciones.length > i; i++){
      this.rutas.push("ruta" + i.toString());  
      this.Nombre.push("c");
    }

  }

      ngOnInit() {
     // Called after the constructor and called  after the first ngOnChanges() 
  } 
  
}
