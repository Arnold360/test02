
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
import { ruta8 } from './ruta8';
import { Juego } from './juego';
import {  Data } from './Data';
import { nombreService } from './nombreService';
import { VideoComponent } from './video.component';
import { VideoComponent2 } from './video.component2';
import { YtPlayerComponent } from './yt-player.component';
@NgModule({
  declarations: [
    AppComponent,
    ruta2,
    ruta3,
    ruta4,
    ruta5,
    ruta6,
    ruta8,
    Juego,
    VideoComponent,
    VideoComponent2,
    YtPlayerComponent,
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
