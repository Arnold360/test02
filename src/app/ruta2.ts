
import { Component } from '@angular/core';

@Component({
  selector: 'ruta2',
  templateUrl: './ruta2.html',
  styleUrls: ['./ruta2.css']
})
export class ruta2 {
  title: String = '@#$__&-+(';
  element:any;
  constructor() {
  this.element = document.getElementById("botón");
  }
  sizeChange() {
    this.title = "Texto alterado";
  }
}
