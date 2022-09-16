import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.css']
})
export class PlayVideoComponent implements OnInit {
  id = 'DWOEWXIRz64';
  playerVars = {
    cc_lang_pref: 'en',
  };
  player: any;
  savePlayer(player: any) {
    this.player = player;
  }
 
  playVideo() {
    this.player.playVideo();
  }
 
  pauseVideo() {
    this.player.pauseVideo();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
