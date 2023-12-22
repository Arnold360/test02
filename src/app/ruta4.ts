
import { Component } from '@angular/core';

@Component({
  selector: 'ruta4',
  templateUrl: './ruta4.html',
  styleUrls: ['./ruta4.css']
})
export class ruta4 {
  conferencias:string[] = ["aa"];
  mitines:string[] = ["bb"];
  entrevistas:string[] = ["cc"];
  declaraciones:string[][] = [this.conferencias, this.mitines, this.entrevistas];
}
