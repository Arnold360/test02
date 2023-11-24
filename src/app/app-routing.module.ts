import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ruta2 } from './ruta2';

const routes: Routes = [{path: 'ruta2',  component: ruta2},
                        {path: 'ruta3',  component: ruta3}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
