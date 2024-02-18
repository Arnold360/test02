import {component, OnInit} from '@angular/core';


@Component({
  tamplate:'<youtube-player> videoId="XqZsoesa55w"</youtube-player>',
  selector: 'app-video'
})

  export class VideoComponent implements Oninit {

  tag!:any;
  

  ngOnInit(){

    this.tag = document.createElement('script');
    this.tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(this.tag);
    }
  }
