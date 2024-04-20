import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls:['./yt-player.component.css']
  })

  export class YtPlayerComponent implements AfterViewInit {
  @ViewChild("youTubePlayer") youTubePlayer: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  @Input("videoID") videoID: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
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
}
