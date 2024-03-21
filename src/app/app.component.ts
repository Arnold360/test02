import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test02';
  x = window.matchMedia("(max-width: 700px)");
  
  constructor(){
    this.cambiarColor();
    this.x.addEventListener("change", () => { this.cambiarColor() } );
  }
  
  cambiarColor(){
    if (this.x.matches) {
      document.body.style.backgroundColor = "red";
      (document.getElementsByClassName("gg-list") as HTMLCollectionOf<HTMLElement>)[0].style.display = "block";
    }
    else {
      document.body.style.backgroundColor = "blue";
      (document.getElementsByClassName("gg-list") as HTMLCollectionOf<HTMLElement>)[0].style.display = "block";
    }
  }

  
}
