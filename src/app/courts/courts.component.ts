import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.css']
})
export class CourtsComponent implements OnInit {
  show = true;
  isMenuOpened:boolean=false;
  qId: any;
  qTitle: any;
  quizze: any;
toggleMenu():void{
  this.isMenuOpened=!this.isMenuOpened;
}



categories=[
  {cid:'',
  title:'',
  description:''
}
]
  quizzes=[
    {
      qId:23,
      title:'',
      description:' ',
      period:'',
     
      category:{
        cid:'',
        title:'',
        description:''
      }
    },]

    
  constructor(private _quiz:CourseService,private _route:ActivatedRoute,private _cat:CategoryService,private _snack:MatSnackBar) { }
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

 
    this._cat.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','errror in loading data from server','error');
      }
    );
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
  onClick() {
    this.show = !this.show;
}

}
