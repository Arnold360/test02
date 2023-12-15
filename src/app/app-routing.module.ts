import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ruta2 } from './ruta2';
import { ruta3 } from './ruta3';
import { ruta4 } from './ruta4';
import {AppComponent} from './app.component';

const routes: Routes = [{path: 'ruta2',  component: ruta2},
                        {path: 'ruta3',  component: ruta3},
                        {path: 'ruta4',  component: ruta4}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
