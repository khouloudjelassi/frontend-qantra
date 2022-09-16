import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  public categories(){
    return this._http.get(`${baseUrl}/category/`);
  }

  public addCategory(category :any){
return this._http.post(`${baseUrl}/category/`,category);
  }
  public deleteQuiz(qId :any){
    return this._http.delete(`${baseUrl}/category/${qId}`)
  }
  public updateQuiz(category: any){
    return this._http.put(`${baseUrl}/category/`,category)
  }

  public getQuiz(qId :any){ 
    return this._http.get(`${baseUrl}/category/${qId}`);
  }
}