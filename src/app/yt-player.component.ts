import { Component, AfterViewInit, ViewChild, ElementRef,
         ChangeDetectorRef, Input, OnInit} from '@angular/core';
import { nombreService } from "./nombreService";

@Component({
  selector: 'yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls:['./yt-player.component.css'],
  })

  export class YtPlayerComponent implements AfterViewInit, OnInit {
  @ViewChild("youTubePlayer") youTubePlayer: ElementRef<HTMLDivElement>;
  @ViewChild("player") player: any;

  videoHeight: number | undefined;
  videoWidth: number | undefined;
  tag!:any;

  @Input("videoID") videoID: string;

  constructor(private changeDetectorRef: ChangeDetectorRef, public servicio: nombreService) {}

  ngOnInit() {
   
  }
  
  ngAfterViewInit(): void {
    this.tag = document.createElement('script');
    this.tag.src = "https://www.youtube.com/player_api";
    document.body.appendChild(this.tag);
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize(): void {
    // you can remove this line if you want to have wider video player than 1200px
    this.videoWidth = Math.min(
      this.youTubePlayer.nativeElement.clientWidth,
      1200
    );
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }
   onReady(event:any) {
    
    this.player.playVideo();
    
  }
   onStateChange(event:any) {
    if (event.data === -1) {
      
       this.player.playVideo(); 
     } 
  }
}
