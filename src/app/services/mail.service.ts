import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _http:HttpClient) { }


    //add quiz
    public addMail(mail :any){
      return this._http.post(`${baseUrl}/api/`,mail);
     }
}
