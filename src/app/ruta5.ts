
import { Component } from '@angular/core';
import { nombreService } from './nombreService';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  providers: [ nombreService ];
})
export class ruta5 {
  enlace:string;
  constructor(servicio:nombreService){
    this.enlace = servicio.enlace;
  } 
}
