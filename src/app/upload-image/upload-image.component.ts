import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { CourseService } from '../services/course.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  categories=[
    {
      cid:23,
      title:''
    },
  
  ]
  quizData={
    title:'',
    description:'',
    period:'',
  
    category:{
      cid:''
    },
  };
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  imageInfos?: Observable<any>;
  constructor(private uploadService: FileUploadService,private _quiz:CourseService,private _cat:CategoryService,private _snack:MatSnackBar) { }
  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }
  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
        }});
    }
  }
  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();

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
