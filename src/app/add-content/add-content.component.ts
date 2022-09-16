import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseService } from '../services/course.service';
import { ObjectifsService } from '../services/objectifs.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

 
  quizData=[
    {
      qId :'',
      title:'',
      description:'',
      period:''
    }
  ]




  objectif={
    ob1:'',
    ob2:'',
    ob3:'',
    ob4:'',
    ob5:'',
    ob6:'',
    ob7:'',
    ob8:'',
    ob9:'',
    ob10:'',
    quiz:{
      qId :''
    },


  };
  

  constructor(private _snack:MatSnackBar,private _quiz:CourseService,private _obj:ObjectifsService) { }


  

  ngOnInit(): void {
    //get of courses
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizData=data;
        console.log(this.quizData);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','errror in loading data from server','error');
      }
    );


  }

  add(){
  
  //add of content of course 
    this._obj.add(this.objectif).subscribe(
      (data)=>{
        Swal.fire('Success','content is added','success')
       
      },
      (error)=>{
        Swal.fire('Error !!','Error while adding quiz','error')
      }
    )
  }

}
