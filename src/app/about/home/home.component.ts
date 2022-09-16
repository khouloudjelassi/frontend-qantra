import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  toAdd(){
    document.getElementById("add")?.scrollIntoView()
  }
}
