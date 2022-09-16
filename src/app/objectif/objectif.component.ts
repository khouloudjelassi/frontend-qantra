import { Component, OnInit } from '@angular/core';
import { ObjectifsService } from '../services/objectifs.service';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {
  objectif: any;

  constructor(private _ob:ObjectifsService) { }

  ngOnInit(): void {
    this._ob.objectifs().subscribe(
      (data:any)=>{
        this.objectif=data;
        console.log(this.objectif);
      },
      (error)=>{
        console.log(error);
      })

  }

}
