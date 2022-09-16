import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css']
})
export class CourseAdminComponent implements OnInit {

  quizzes=[
    {
      qId:23,
      title:'',
      description:' ',
      period:'',
     
      category:{
        title:''
      }
    },]
  constructor(private _quiz:CourseService) { }
  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error)
        Swal.fire('Error !','Error in loading data !', 'error')
      }
    )
    
  }
  deleteQuiz(qId :any){
 Swal.fire({
   icon:'info',
   title:'Are you sure ?',
   confirmButtonText:'Delete',
   showCancelButton:true,

 }).then((result)=>{
   if(result.isConfirmed)
   {
    this._quiz.deleteQuiz(qId).subscribe((data)=>
    {
      this.quizzes=this.quizzes.filter((quiz)=>quiz.qId !=qId)
      Swal.fire('Success','Course deleted','success')
    },(error)=>{
      Swal.fire('Error !!','Error in deleting Course','success')
    })
   }
 })
  }

}
