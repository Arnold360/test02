
import { Component } from '@angular/core';
import { nombreService } from './nombreService'

@Component({
  selector: 'ruta4',
  templateUrl: './ruta4.html',
  styleUrls: ['./ruta4.css'],
  providers: [ nombreService ]
})
export class ruta4 {
  conferencias:string[] = ["CONFERENCIA EN LA PLAZA SAN MARTIN 2022","CONFERENCIA EN ANDAHUAYLAS 2022"];
  mitines:string[] = ["MITIN EN ANDAHUAYLAS 2022","MITIN EN CUSCO 2022"];
  entrevistas:string[] = ["ENTREVISTA WILLAX 2022","ENTREVISTA LA REPUBLICA 2023", "ENTREVISTA EN CUSCO 2023"];
  declaraciones:string[] = this.conferencias.concat(this.mitines).concat(this.entrevistas);
  videoActual:string = "";
  indice:number = 0;
  rutas:string[] = []; 
  nombre!:string;

  
  constructor(nombre:nombreService){
    for (let i = 0; this.declaraciones.length > i; i++){
      this.rutas.push("ruta" + i.toString());
      this.nombre = nombre;
    }
  }

  changeLink( indice:number ){
    
    this.videoActual = this.declaraciones[indice];
    this.indice += 1;
     
  }
}
