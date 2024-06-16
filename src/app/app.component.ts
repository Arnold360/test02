import { Component, AfterViewInit } from '@angular/core';
import { nombreService } from './nombreService';
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
  elementoColoreado!:HTMLElement;
  
  
  constructor( public nombreservice:nombreService){
    
    this.x.addEventListener("change", () => { this.cambiarColor() } );
    this.elemento2 = document.createElement("div");
    this.elemento3 = document.createElement("li");
  
 
  }
  
  changeLinkColor(e:HTMLElement) {
           if( e != this.elementoColoreado){
            e.style.color = "red";
            this.resetLinkColor(this.elementoColoreado);
            this.elementoColoreado = e;
           }
        }

  resetLinkColor(i:HTMLElement) {
             i.style.color = "green";
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
  /* random html element as place holder*/
  this.elementoColoreado = document.getElementById("link" + this.linkActual );
  this.elementoColoreado.style.color = red;

  this.cambiarColor();
  
}
  mousehover(){
    this.elemento4.style.display = "none";
  }

}
