import { SafeUrl, DomSanitizer} from '@angular/platform-browser';
import { Component, SkipSelf, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { nombreService } from './nombreService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ruta5',
  templateUrl: './ruta5.html',
  styleUrls: ['./ruta5.css'],
  
})
export class ruta5 implements OnInit, AfterViewInit {
  
  iframe!:any;
  video!:any;
  endTime:number = 20;
  startTime:number = 10;
  prueba!:Number;
  linkActual:number;
  @ViewChild('player1') player: any;
  
  constructor(public servicio:nombreService, private activatedRoute: ActivatedRoute) {
  
   this.linkActual = +this.activatedRoute.snapshot.params['linkActual'];
   servicio.linkActual = this.linkActual;
  }
  
  ngOnInit() {
    
  }
  
  
  ngAfterViewInit() {
  
  }

  

}
