import { Component, OnInit } from '@angular/core';
import { CondidatService } from '../services/condidat.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {
term:string='';

  condidats=[
    {
      id:23,
      nom:'',
      prenom:'',
      email:'',
      numt:'',
      lieu:'',
      quiz:{
      title:''
     }
    },

  ]
  id: any;

  constructor(private _category:CondidatService ,private _route:ActivatedRoute) { }


  ngOnInit(): void {
 
    this._category.condidats().subscribe((data:any)=>{
      this.condidats=data;
      console.log(this.condidats);
});
}

//suppimer condidat
deleteQuiz(qId :any){
  Swal.fire({
    icon:'info',
    title:'Are you sure ?',
    confirmButtonText:'Delete',
    showCancelButton:true,
 
  }).then((result)=>{
    if(result.isConfirmed)
    {
     this._category.deleteQuiz(qId).subscribe((data)=>
     {
       this.condidats=this.condidats.filter((quiz)=>quiz.id !=qId)
       Swal.fire('Success','Condidat deleted','success')
     },(error)=>{
       Swal.fire('Error !!','Error in deleting condidat','success')
     })
    }
  })
   }}