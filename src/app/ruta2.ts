
import { Component } from '@angular/core';

@Component({
  selector: 'ruta2',
  templateUrl: './ruta2.html',
  styleUrls: ['./ruta2.css']
})
export class ruta2 {
  title = 'ruta2';
  element = document.getElementById(botón);
  function sizeChange(){
    this.element.style.width = "1000px";
  }
}
