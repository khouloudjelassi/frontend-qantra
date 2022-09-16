import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  //add quiz
  public addQuiz(quiz :any){
   return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  public deleteQuiz(qId :any){
    return this._http.delete(`${baseUrl}/quiz/${qId}`)
  }

  public getQuiz(qId :any){ 
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }

  public getQuizzesOfCategory(cid:any){
    return this._http.get(`${baseUrl}/quiz/category/${cid}`)
    
  }

  //get active quizzes
  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`)
  }

  public updateQuiz(quiz: any){
    return this._http.put(`${baseUrl}/quiz/`,quiz)
  }
}
