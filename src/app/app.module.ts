// other imports
import { TscUiModule } from 'tsc-ui';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ruta2 } from './ruta2';

@NgModule({
  declarations: [
    AppComponent,
    ruta2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TscUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
