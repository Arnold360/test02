
import { Component } from '@angular/core';

@Component({
  selector: 'ruta6',
  templateUrl: './ruta6.html',
  styleUrls: ['./ruta6.css']
})
export class ruta6 { 

  // Load the IFrame Player API code asynchronously.
constructor(){
var tag = document.createElement('script');
this.tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
this.firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var videoId = 'M7lc1UVf-VE';
var startSeconds = 36;
var endSeconds = 45;

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player!;

var playerConfig = {
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
  player = new YT.Player('ytplayer', playerConfig);
}

function onStateChange(state) {
  if (state.data === YT.PlayerState.ENDED) {
    player.loadVideoById({
      videoId: videoId,
      startSeconds: startSeconds,
      endSeconds: endSeconds
    });
  }
}
  
}
