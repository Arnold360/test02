
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ruta2 } from './ruta2';
import { ruta3 } from './ruta3';
import { ruta4 } from './ruta4';
import { ruta5 } from './ruta5';
import { ruta6 } from './ruta6';
import { nombreService } from './nombreService';

@NgModule({
  declarations: [
    AppComponent,
    ruta2,
    ruta3,
    ruta4,
    ruta5,
    ruta6,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
