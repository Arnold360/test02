import {Component, OnInit} from '@angular/core';


@Component({
  template:'<youtube-player videoId="dQw4w9WgXcQ" suggestedQuality="highres" [height]="600" [width]="1080" [startSeconds]="43" [endSeconds]="60"></youtube-player>',
    
  selector: 'app-video'
})

  export class VideoComponent implements OnInit {

  tag!:any;
  

  ngOnInit(){

    this.tag = document.createElement('script');
    this.tag.src = "https://www.youtube.com/player_api";
    document.body.appendChild(this.tag);
    }
  }
