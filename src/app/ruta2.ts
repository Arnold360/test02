
import { Component } from '@angular/core';

@Component({
  selector: 'ruta2',
  templateUrl: './ruta2.html',
  styleUrls: ['./ruta2.css']
})
export class ruta2 {
  title = '@#$__&-+(';
  count = 0;
  element;
  source = "https://4.bp.blogspot.com/-9AMM6-R4LG8/TaB68k4nOdI/AAAAAAAACaU/61VQ0G6McdQ/s1600/TODO-EL-ARTE-MOCHICA-EN-VASIJA-FIGURA-Y-ABUNDANTE-DECORACION-CON-ASA-ESTRIBO.jpg";
  constructor() {
  this.element = document.getElementById("botón");
  }
  sizeChange() {
    if (this.count <= 5){
     this.title = `Texto alterado ${this.count}`;
     this.count++;
     
    }
    else{
      this.title = "no hay mas";
      alert("este es un prueba de mensaje");
    }
  }
}
