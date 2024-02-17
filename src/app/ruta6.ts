
import { Component } from '@angular/core';

@Component({
  selector: 'ruta6',
  templateUrl: './ruta6.html',
  styleUrls: ['./ruta6.css']
})
export class ruta6 { 
  tag!:HTMLElement;
  firstScriptTag!:HTMLElement;
  
  videoId!:String;
  startSeconds!:Number;
  endSeconds!:Number;

  player!;
  playerConfig!;
  // Load the IFrame Player API code asynchronously.
constructor(){
  this.tag = document.createElement('script');
  this.tag.src = "https://www.youtube.com/player_api";
  this.firstScriptTag = document.getElementsByTagName('script')[0];
  this.firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  this.videoId = 'M7lc1UVf-VE';
  this.startSeconds = 36;
  this.endSeconds = 45;

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.

  this.playerConfig = {
    height: '360',
    width: '640',
    videoId: videoId,
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      controls: 0, // Show pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 1, // Hide the Youtube Logo
      fs: 1, // Hide the full screen button
      cc_load_policy: 0, // Hide closed captions
      iv_load_policy: 3, // Hide the Video Annotations
      start: startSeconds,
      end: endSeconds,
      autohide: 0, // Hide video controls when playing
    },
    events: {
      'onStateChange': onStateChange
    }
   };
  } 
  
function onYouTubePlayerAPIReady() {
  this.player = new YT.Player('ytplayer', playerConfig);
}

function onStateChange(state) {
  if (state.data === YT.PlayerState.ENDED) {
    this.player.loadVideoById({
      videoId: videoId,
      startSeconds: startSeconds,
      endSeconds: endSeconds
    });
  }
}
  
}
