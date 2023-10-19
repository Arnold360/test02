import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ruta2 } from 

const routes: Routes = [{path: 'ruta2',  component: ruta2}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
