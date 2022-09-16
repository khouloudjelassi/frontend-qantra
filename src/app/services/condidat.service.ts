import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  constructor(private _http:HttpClient) { }

  public condidats(){
    return this._http.get(`${baseUrl}/condidat/`);
  }

  public addCondidat(condidat :any){
    return this._http.post(`${baseUrl}/condidat/`,condidat);
      }

      public deleteQuiz(qId :any){
        return this._http.delete(`${baseUrl}/condidat/${qId}`)
      }

      public quizzes(){
        return this._http.get(`${baseUrl}/quiz/`)
      }

      public getQuizzesOfCategory(qid:any){
        return this._http.get(`${baseUrl}/condidat/quiz/${qid}`)
        
      }

      public getQuiz(qid :any){ 
        return this._http.get(`${baseUrl}/condidat/${qid}`);
      }
}
