import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _quiz:CourseService,private _cat: CategoryService) { }

  qId=0;
  quizzes:any
  categories:any

  ngOnInit(): void {

this._cat.categories().subscribe(
  (data:any)=>{
    this.categories=data
  },
  (error)=>{
    alert('error in loading course')
  }
)
  }

  public updateData(){
    this._quiz.updateQuiz(this.quizzes).subscribe(
      (data)=>{
        window.location.href='/courseadmin'        
      },
      (error)=>{
        alert('erreu')
      }
      
    )
  }

}
