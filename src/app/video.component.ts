import {Component, OnInit} from '@angular/core';


@Component({
  template:'<youtube-player> videoId="XqZsoesa55w"</youtube-player>',
  selector: 'app-video'
})

  export class VideoComponent implements OnInit {

  tag!:any;
  

  ngOnInit(){

    this.tag = document.createElement('script');
    this.tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(this.tag);
    }
  }
