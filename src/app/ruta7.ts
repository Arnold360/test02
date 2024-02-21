
var button = document.getElementById('play')
var video = document.getElementById('video');
var startTime = 10;
var endTime = 20;

button.addEventListener('click', playVideo, !1);

function playVideo(e) {

    function checkTime() {
        if (video.currentTime >= endTime) {
           video.pause();
        } else {
           /* call checkTime every 1/10th 
              second until endTime */
           setTimeout(checkTime, 100);
        }
    }

    video.currentTime = startTime;
    video.play();
    checkTime();
}
