
import { Component, SkipSelf } from '@angular/core';
import { nombreService } from './nombreService';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  
})
export class ruta5 {
  
  
  
  constructor( public servicio:nombreService){
    
  } 
}
