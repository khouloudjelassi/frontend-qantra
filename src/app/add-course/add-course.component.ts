import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../services/category.service';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { FileUploadService } from '../services/file-upload.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  categories=[
    {
      cid:23,
      title:'Programming'
    },
  
  ]




  quizData={
    title:'',
    description:'',
    period:'',
    nombrechapitre:'',
    nombreexercice:'',
    nombreproject:'',
    meettype:'',
    nombreworkshps:'',
    nombrehore:'',
    goal1:'',
    goal2:'',
    goal3:'',
    goal4:'',
    goal5:'',
    price:'',
    category:{
      cid:''
    },

  };
  constructor(private _cat:CategoryService,private _snack:MatSnackBar,private _quiz:CourseService,private _file:FileUploadService) { }

  ngOnInit(): void {
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

addQuiz(){
  if(this.quizData.title.trim()=='' || this.quizData.title==null)
  {
this._snack.open('Title Required !!')
return;
  }

  this._quiz.addQuiz(this.quizData).subscribe(
    (data)=>{
      Swal.fire('Success','quiz is added','success')
      this.quizData={
        title:'',
        description:'',
        period:'',
        nombrechapitre:'',
        nombreexercice:'',
        nombreproject:'',
        meettype:'',
        nombreworkshps:'',
        nombrehore:'',
        goal1:'',
        goal2:'',
        goal3:'',
        goal4:'',
        goal5:'',
        price:'',
        category:{
          cid:''
        },
       
      };
    },
    (error)=>{
      Swal.fire('Error !!','Error while adding quiz','error')
    }
  )
}

}
