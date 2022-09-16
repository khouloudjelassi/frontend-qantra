import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ObjectifsService {

  constructor(private _http:HttpClient) { }

  public objectifs(){
    return this._http.get(`${baseUrl}/objectif/`)
  }

  //add quiz
  public add(objectif :any){
   return this._http.post(`${baseUrl}/objectif/`,objectif);
  }
}
