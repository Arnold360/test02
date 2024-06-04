import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'test02';
  x = window.matchMedia("(max-width: 800px)");
  elemento!:HTMLElement;
  elemento2:HTMLElement;
  elemento3!:HTMLElement;
  elemento4!:HTMLElement;
  elemento5!:HTMLElement;
  elemento6!:HTMLElement;
  prueba!:string;
  
  constructor(){
    
    this.x.addEventListener("change", () => { this.cambiarColor() } );
    this.elemento2 = document.createElement("div");
    this.elemento3 = document.createElement("li");
    
 
  }
  
  changeLinkColor(i:number) {
            this.elementoColoreado = document.getElementById("enlace" + i);
            this.elementoColoreado.style.color = "red";
        }

  resetLinkColor() {
             this.elementoColoreado.style.color = "purple";
        }   
  
  cambiarColor(){
       if (this.x.matches) {
          document.body.style.backgroundColor = "#87CEEB";
          this.elemento6.style.display = "block";
          this.elemento6.appendChild(this.elemento4);
          this.elemento4.style.display = "none";
      }
      else {
         document.body.style.backgroundColor = "pink";
         this.elemento4.style.display = "flex";
         this.elemento5.appendChild(this.elemento4);
         this.elemento6.style.display = "none";
      
     
    }
  }
ngAfterViewInit(){
  this.elemento = (document.getElementsByClassName("gg-list") as HTMLCollectionOf<HTMLElement>)[0];
  this.elemento4 = document.getElementById("barranav");
  this.elemento5 = document.getElementById("fondo");
  this.elemento6 = document.getElementById("emvoltura");
  this.prueba = window.getComputedStyle(this.elemento).getPropertyValue("height");
  this.cambiarColor();
  this.changeLinkColor();
  this.resetLinkColor();
}
  mousehover(){
    this.elemento4.style.display = "none";
  }

}
