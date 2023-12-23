
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ruta2 } from './ruta2';
import { ruta3 } from './ruta3';
import { ruta4 } from './ruta4';

@NgModule({
  declarations: [
    AppComponent,
    ruta2,
    ruta3,
    ruta4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
