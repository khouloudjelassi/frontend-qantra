import { Component, OnInit,Inject,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { CondidatService } from '../services/condidat.service';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ObjectifsService } from '../services/objectifs.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  constructor(private _category:CondidatService,private _route:ActivatedRoute,
    private _quiz:CourseService,private _cat: CategoryService,private dialog:MatDialog,private _ob:ObjectifsService) { }
    @Input() qId: any;
 
  quizzes:any
  categories:any

quizDatas=[
  {
    qId :'',
    title:'',
    description:'',
    period:''
  }
]



objectif=
{
  oid:'',
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

}

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





  ngOnInit(): void {
    
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizDatas=data;
        console.log(this.quizDatas);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','errror in loading data from server','error');
      })

      this._ob.objectifs().subscribe(
        (data:any)=>{
          this.objectif=data;
          console.log(this.objectif);
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

  toAdd(){
    document.getElementById("add")?.scrollIntoView()
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
    openDialog() {
      this.dialog.open(DialogComponent, {
     width:'50%'
     
      });
    }
  
  
}