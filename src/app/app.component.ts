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
  elemento6!:HTMLElement;
  elemento7!:HTMLElement;
  prueba!:string;
  
  constructor(){
    
    this.x.addEventListener("change", () => { this.cambiarColor() } );
    this.elemento2 = document.createElement("div");
    this.elemento3 = document.createElement("li");
    
 
  }
  
  cambiarColor(){
    if (this.x.matches) {
      window.getComputedStyle(document.body).backgroundColor = "red";
      window.getComputedStyle(this.elemento).display = "block";
      this.elemento.appendChild(this.elemento4);
      window.getComputedStyle(this.elemento4).display = "none";
    }
    else {
      document.body.style.backgroundColor = "blue";
      window.getComputedStyle(this.elemento4).display = "flex";
      this.elemento5.appendChild(this.elemento4);
      window.getComputedStyle(this.elemento).display = "none";
      
     
    }
  }
ngAfterViewInit(){
  this.elemento =  (document.getElementsByClassName("gg-list") as HTMLCollectionOf<HTMLElement>)[0];
  this.elemento4 =  document.getElementById("barranav");
  this.elemento5 =  document.getElementById("fondo");
  this.prueba = window.getComputedStyle(this.elemento).getPropertyValue("background-color");

  this.elemento4.onmouseover = this.mousehover;
  
  this.cambiarColor();
  
}
  mousehover(){
    this.elemento4.style.display = "none";
  }

}
