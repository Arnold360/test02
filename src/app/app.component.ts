import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'test02';
  x = window.matchMedia("(max-width: 700px)");
  elemento!:HTMLElement;
  elemento2:HTMLElement;
  elemento3!:HTMLElement;
  elemento4!:HTMLElement;
  elemento5!:HTMLElement;
  
  constructor(){
    
    this.x.addEventListener("change", () => { this.cambiarColor() } );
    this.elemento2 = document.createElement("div");
    this.elemento3 = document.createElement("li");
 
  }
  
  cambiarColor(){
    if (this.x.matches) {
      document.body.style.backgroundColor = "red";
      this.elemento.style.display = "block";
      this.elemento4.style.display = "none";
      this.elemento.appendChild(this.elemento4);
    }
    else {
      document.body.style.backgroundColor = "blue";
      this.elemento5.appendChild(this.elemento4);
      this.elemento.style.display = "none";
      
     
    }
  }
ngAfterViewInit(){
  this.elemento =  (document.getElementsByClassName("gg-list") as HTMLCollectionOf<HTMLElement>)[0];
  this.elemento4 =  document.getElementById("barranav");
  this.elemento5 =  document.getElementById("fondo");
  this.cambiarColor();
 
}
  
}
