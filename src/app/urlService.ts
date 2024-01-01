import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class urlService {

  urls:string[] = ["entrevista1", "entrevista2", "entrevista3"];
  constructor() { }

}
