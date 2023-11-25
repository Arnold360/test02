import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ruta2 } from './ruta2';
import { ruta3 } from './ruta3';

const routes: Routes = [{path: 'ruta2',  component: ruta2},
                        {path: 'ruta3',  component: ruta3},
                        {path: '**', componenr: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
