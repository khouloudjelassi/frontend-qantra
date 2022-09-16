import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { CondidatService } from '../services/condidat.service';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-createmail',
  templateUrl: './createmail.component.html',
  styleUrls: ['./createmail.component.css']
})
export class CreatemailComponent implements OnInit {

  public condidat=
  [{
    id:'',
    nom:'',
    prenom:'',
    email:'',
    numt:'',
    lieu:'',
  }

  ]

  mail={
    receiver:'',
    object:'',
    content:'',
    condidat:{
      id :'',
      email:'',
    },
  };
  id=0
  condidats: any;
  constructor(private _cat:MailService,private _snack:MatSnackBar,private _route:ActivatedRoute,private _quiz:CondidatService) { }

  ngOnInit(): void {
    this._quiz.condidats().subscribe(
      (data:any)=>{
        this.condidat=data;
        console.log(this.condidat);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','errror in loading data from server','error');
      })

    this.id=this._route.snapshot.params['id'];
   // alert(this.id)
this._quiz.getQuiz(this.id).subscribe(
  (data:any)=>{
    this.condidats=data;
    console.log(this.condidats)
  },
  (error)=>{
    console.log(error)
  }
);

  }

  formSubmit(){

  
  this._cat.addMail(this.mail).subscribe(
  (data)=>{
    this.mail.receiver=''
    this.mail.object=''
    this.mail.content=''
    Swal.fire('Success !!','mail is sent','success');
  },
  (error)=>{
    Swal.fire('Error !!','Server error','error');
  
  }
  );
  }
  }
  