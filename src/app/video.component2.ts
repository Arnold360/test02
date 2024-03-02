import {Component, OnInit} from '@angular/core';


@Component({
  template:'<div id="ytplayer"></div> <script></script>',
  selector: 'app-video2'
})

  export class VideoComponent2  {

    tag!:any;
  firstScriptTag!:any;
  
  videoId!:string;
  startSeconds!:number;
  endSeconds!:number;

  player!:any;
  playerConfig!:any;
  // Load the IFrame Player API code asynchronously.
constructor(){
  
  this.tag = document.createElement('script');
  this.tag.src = "https://www.youtube.com/player_api";
  document.body.appendChild(this.tag);

  this.videoId = 'M7lc1UVf-VE';
  this.startSeconds = 36;
  this.endSeconds = 45;

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.

  this.playerConfig = {
    height: '360',
    width: '640',
    videoId: this.videoId,
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      controls: 0, // Show pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 1, // Hide the Youtube Logo
      fs: 1, // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3, // Hide the Video Annotations
      start: this.startSeconds,
      end: this.endSeconds,
      autohide: 0, // Hide video controls when playing
    },
    events: {
      'onStateChange': this.onStateChange
    }
   };
  } 
  
 onYouTubePlayerAPIReady() {
  this.player = new YT.Player(document.getElementById('ytplayer'), this.playerConfig);
}

 onStateChange(state:any) {
  if (state.data === YT.PlayerState.ENDED) {
    this.player.loadVideoById({
      videoId: this.videoId,
      startSeconds: this.startSeconds,
      endSeconds: this.endSeconds
    });
  }
}
}
