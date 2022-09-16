import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { CourseService } from '../services/course.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoadQuizComponent } from '../load-quiz/load-quiz.component';
import { log } from 'console';


@Component({
  selector: 'app-listecourseofcategory',
  templateUrl: './listecourseofcategory.component.html',
  styleUrls: ['./listecourseofcategory.component.css']
})
export class ListecourseofcategoryComponent implements OnInit {
  @Input() cid: any;
  quizzes: any;
  categories = [
    {
      cid: 23,
      title: 'programming',
      description: 'this is testing category'
    },

  ]
  show = true;
  constructor(private _route: ActivatedRoute, private _quiz: CourseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.cid=this._route.snapshot.params['cid'];

    // this._route.params.subscribe((params)=>{
    //   this.cid=params['catId'];


    //    console.log('load specific the quiz');
  
//get list course of evry category
    this._quiz.getQuizzesOfCategory(this.cid).subscribe(
      (data: any) => {
        this.quizzes = data;

      },



    )

    
  }








  openDialog() {
    this.dialog.open(CourseService, {
      width: '50%'

    });
  }


  onClick() {
    this.show = !this.show;
}
}
