import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ruta2 } from './ruta2';
import { ruta3 } from './ruta3';
import { ruta4 } from './ruta4';
import { ruta5 } from './ruta5';
import { ruta6 } from './ruta6';
import { ruta8 } from './ruta8';
import {AppComponent} from './app.component';

const routes: Routes = [  { path: 'ruta2',  component: ruta2 },
                          { path: 'ruta3',  component: ruta3,  children: [{path:'ruta5', component:ruta5}] },
                          { path: 'ruta4',  component: ruta4,  children: [{path:'ruta5', component:ruta5}] }, 
                          { path: 'ruta6',  component: ruta6,  children: [{path:'ruta5', component:ruta5}] },
                          { path: 'ruta8',  component: ruta8,  children: [{path:'ruta5', component:ruta5}] }  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
