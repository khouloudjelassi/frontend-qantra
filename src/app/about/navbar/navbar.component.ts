import { Component, OnInit,Output,EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isMenuOpened:boolean=false;
toggleMenu():void{
  this.isMenuOpened=!this.isMenuOpened;
}


  constructor() { }

  ngOnInit(): void {
  }

}
