import {Component, OnInit} from '@angular/core';


@Component({
  template:'<youtube-player videoId="XqZsoesa55w"></youtube-player>',
  selector: 'app-video2'
})

  export class VideoComponent2 implements OnInit {

  tag!:any;
  

  ngOnInit(){

    this.tag = document.createElement('script');
    this.tag.src = "https://www.youtube.com/player_api";
    document.body.appendChild(this.tag);
    }
  }
