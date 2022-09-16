import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  qId=0;
  categories:any
  constructor(private _route:ActivatedRoute,private _cat: CategoryService) { }

 

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qId'];

    this._cat.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(this.categories)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  public updateData(){
    this._cat.updateQuiz(this.categories).subscribe(
      (data)=>{
        alert("yes")
      },
      (error)=>{
        alert('erreu')
      }
    )
  }

}

