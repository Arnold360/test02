
import { Injectable } from '@angular/core';
import { entrevista } from './entrevista';

@Injectable({
  providedIn: 'root',
})
export class nombreService {

  nombres:string[] = ["entrevista1", "entrevista2", "entrevista3"];
  url:string[] = [];
  entrevistas:entrevista[] = [{nombre:"entrevista" , url:"https://www.youtube.com/embed/m3hay8aw0Pc?si=s2irA4BQisB1vgMS" }];
  constructor() {
  }
