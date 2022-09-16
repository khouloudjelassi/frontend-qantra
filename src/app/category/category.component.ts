import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories=[
    {
      cid:23,
      title:'programming',
      description:'this is testing category'
    },
 
  ]
  constructor(private _category:CategoryService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    //get categories
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
       },
       (error)=>{
         console.log(error);
         Swal.fire('Error !!','Error in loading data','error');
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
         this._category.deleteQuiz(qId).subscribe((data)=>
         {
           this.categories=this.categories.filter((quiz)=>quiz.cid !=qId)
           Swal.fire('Success','Category deleted','success')
         },(error)=>{
           Swal.fire('Error !!','Error in deleting category','success')
         })
        }
      })
       }}
