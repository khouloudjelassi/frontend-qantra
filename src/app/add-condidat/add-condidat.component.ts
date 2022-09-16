import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CondidatService } from '../services/condidat.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-condidat',
  templateUrl: './add-condidat.component.html',
  styleUrls: ['./add-condidat.component.css']
})
export class AddCondidatComponent implements OnInit {
 
 
quizDatas=[
  {
    qId :'',
    title:'',
    description:'',
    period:''
  }
]
 //model condidat
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
 constructor(private _category:CondidatService,private _snack:MatSnackBar,private _quiz:CourseService
  ,private router:Router,) {

}
ngOnInit() {
  //get course
  this._quiz.quizzes().subscribe(
    (data:any)=>{
      this.quizDatas=data;
      console.log(this.quizDatas);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','errror in loading data from server','error');
    })
}




formSubmit(registerForm:NgForm){

//add condidat
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
