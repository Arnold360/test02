
import { Component } from '@angular/core';

@Component({
  selector: 'ruta2',
  templateUrl: './ruta2.html',
  styleUrls: ['./ruta2.css']
})
export class ruta2 {
  title = '@#$__&-+(';
  count = 0;
  element: HTMLElement | null;
  let imagenesAleatorias: string[] = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/?blur",
  "https://picsum.photos/200/300/?blur=2",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2"
];

  sources: string[] = ["https://4.bp.blogspot.com/-9AMM6-R4LG8/TaB68k4nOdI/AAAAAAAACaU/61VQ0G6McdQ/s1600/TODO-EL-ARTE-MOCHICA-EN-VASIJA-FIGURA-Y-ABUNDANTE-DECORACION-CON-ASA-ESTRIBO.jpg" , "https://www.meisterdrucke.es/kunstwerke/400w/Moche%20-%20Stirrup%20vase%20in%20the%20form%20of%20a%20man%20playing%20a%20drum%20200-800%20%28ce%20-%20%28MeisterDrucke-259516%29.jpg" , "https://www.tierra-inca.com/album/photos/020/02044.jpg"].concat(imagenesAleatorias);
  source = "https://4.bp.blogspot.com/-9AMM6-R4LG8/TaB68k4nOdI/AAAAAAAACaU/61VQ0G6McdQ/s1600/TODO-EL-ARTE-MOCHICA-EN-VASIJA-FIGURA-Y-ABUNDANTE-DECORACION-CON-ASA-ESTRIBO.jpg";
  constructor() {
  this.element = document.getElementById("imagen");
    
  }
  titles(){
    this.title = `Texto alterado ${this.count}`;
    this.source = this.sources[this.count];
  }
  next() {
    if (this.count < this.sources.length - 1 ) {
     this.count++;
     this.titles();
    }
    else{
     this.count = 0;
     this.titles();
    }
  }
  prior() {
     if (this.count > 0) {
       this.count--;
       this.titles(); 
     } 
     else {
       this.count = this.sources.length - 1;
       this.titles();
     } 
   }
 
}

    
    
  

