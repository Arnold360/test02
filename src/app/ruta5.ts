
import { Component, SkipSelf } from '@angular/core';
import { nombreService } from './nombreService';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  
})
export class ruta5 {
  
  
  prueba:string = "https://www.youtube.com/embed/HfCjXPMj5VA?si=WcMHdlsjn3uzewKo";
  constructor( public servicio:nombreService){
    
  } 
}
