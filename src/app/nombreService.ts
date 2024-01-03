
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class nombreService {

  entrevistas:string[] = ["entrevista1", "entrevista2", "entrevista3"];
  url:string[] = [{nombre:entrevista , url:"https://www.youtube.com/embed/m3hay8aw0Pc?si=s2irA4BQisB1vgMS" }];
  constructor() {
  }
