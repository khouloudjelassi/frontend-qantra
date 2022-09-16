import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CondidatService } from '../services/condidat.service';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  
quizDatas=[
  {
    qId :'',
    title:'',
    description:'',
    period:''
  }
]
 
  public condidat=
  {
    nom:'',
    prenom:'',
    email:'',
    numt:'',
    lieu:'',
   
    quiz:{
      qId :''
    },

  }



 timerInterval: any
 form!: FormGroup;
 message!:boolean;
 qId=0;
  quizzes:any
  categories:any
   constructor(private _category:CondidatService,private _snack:MatSnackBar,private _quiz:CourseService
  ,private router:Router,private _route:ActivatedRoute,private _cat:CategoryService) {

}
ngOnInit() {
  this._quiz.quizzes().subscribe(
    (data:any)=>{
      this.quizDatas=data;
      console.log(this.quizDatas);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','errror in loading data from server','error');
    })

    this.qId=this._route.snapshot.params['qid'];
    // alert(this.qId)
 this._quiz.getQuiz(this.qId).subscribe(
   (data:any)=>{
     this.quizzes=data;
     console.log(this.quizzes)
   },
   (error)=>{
     console.log(error)
   }
 );
 this._cat.categories().subscribe(
   (data:any)=>{
     this.categories=data
   },
   (error)=>{
     alert('error in loading course')
   }
 )
}




formSubmit(registerForm:NgForm){


this._category.addCondidat(this.condidat).subscribe(
(data)=>{
  //this.router.navigateByUrl('/getcategory');
console.log(this.condidat)
 Swal.fire('Success !!','Condidat is added successfuly','success');
//this.message=true;
registerForm.reset();
},
(error)=>{
Swal.fire('Error !!','Server error','error');

}
);
}


}
