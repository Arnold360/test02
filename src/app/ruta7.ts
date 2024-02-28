import {Component, ViewChild, ElementRef, AfterViewInit, OnInit, Input} from "@angular/core";


@Component({selector:"ruta7",
            templateUrl:"./ruta7.html"
            })

  
export class ruta7 implements AfterViewInit, OnInit {

  button = document.getElementById('play');
  tag!:any;
  
  startTime:number = 3;
  endTime:number = 10;
  duration:number = 2000;
  currentTime!:number;
  @ViewChild('player') player: any;
  
  videoId: string;
  @Input("videoId") 
  get id(): string {
    return this.videoId;
}
  set id(id: string) {
    this.videoId = id;
  }
  
  constructor(){ 
  }
  
  ngOnInit() {
    this.tag = document.createElement('script');
    this.tag.src = "https://www.youtube.com/player_api";
    document.body.appendChild(this.tag);
  }

  // Autoplay
  onReady(event:any) {
    this.player.mute();         
    this.player.endSeconds = 2410;
    this.player.startSeconds = 2400;
    this.player.playVideo();  
  }

  // Loop
  onStateChange(event:any) {
    if (event.data === 0) {
      this.player.loadVideoById(this.videoId, 1800, "large");
      this.player.unMute();
      this.player.playVideo();  
     }
  }

  actualizacion(e:any, video:any){
      this.currentTime = video.currentTime;
  }
  
   evento(e:any, video:any){
      this.currentTime = video.currentTime;
      this.player.seekTo(2400, true);
      if(!video.paused){video.pause();}
      else { video.play();
             video.currentTime = 3; }
   }

  progreso(e:any, video:any){
       this.currentTime = video.currentTime;
  }
  
   onMetadata(e:any, video:any) {
       this.duration = 1000;
       this.currentTime = video.currentTime;
       console.log('metadata: ', e);
       console.log('duration:  ', this.duration = video.duration);
       
     }
     

  ngAfterViewInit() {
   
  }

  /*checkTime() {
      if (this.video.currentTime >= this.endTime) { 
         this.video.pause();
        } else {
            call checkTime every 1/10th 
              second until endTime 
           setTimeout(this.checkTime, 100);
        }
    }
 pausa(){
   this.video.pause();
 }
  
 playVideo() {


    this.video.currentTime = this.startTime;
    this.video.play();
    this.checkTime();
}*/
}
