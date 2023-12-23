
import { Component } from '@angular/core';

@Component({
  selector: 'ruta4',
  templateUrl: './ruta4.html',
  styleUrls: ['./ruta4.css']
})
export class ruta4 {
  conferencias:string[] = ["CONFERENCIA EN LA PLAZA SAN MARTIN 2022","CONFERENCIA EN ANDAHUAYLAS 2022"];
  mitines:string[] = ["MITIN EN ANDAHUAYLAS 2022","MITIN EN CUSCO 2022"];
  entrevistas:string[] = ["ENTREVISTA WILLAX 2022","ENTREVISTA LA REPUBLICA 2023"];
  declaraciones:string[] = this.conferencias.concat(this.mitines).concat(this.entrevistas);
  videoActual:string = "";

  changeLink( indice ){

    this.videoActual = this.declaraciones[indice];
     
  }
}
