
import { Component } from '@angular/core';

@Component({
  selector: 'ruta4',
  templateUrl: './ruta4.html',
  styleUrls: ['./ruta4.css']
})
export class ruta4 {
  conferencias:string[] = [];
  mitines:string[] = [];
  entrevistas:string[] = [];
  declaraciones = [conferencias, mitines, entrevistas];
}
