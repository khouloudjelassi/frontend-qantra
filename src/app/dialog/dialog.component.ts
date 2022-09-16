import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  qid:any;
  quiz:any;
  constructor(private _route:ActivatedRoute
    ,private _quiz:CourseService,
    private _router:Router
    ) { }
  ngOnInit(): void {
  
  }

}
