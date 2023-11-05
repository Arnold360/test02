
import { Component } from '@angular/core';

@Component({
  selector: 'ruta2',
  templateUrl: './ruta2.html',
  styleUrls: ['./ruta2.css']
})
export class ruta2 {
  title = '@#$__&-+(';
  element:any;
  count:number;
  constructor() {
  this.element = document.getElementById("botón");
  }
  sizeChange() {
    if (count <= 5){
     this.title = 'Texto alterado {count}';
     count++;
    }
    else{
      
    }
  }
}
