import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData={
username:'',
password:''
};

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }


  formSubmit(){
    console.log('login btn clicked');

    if(this.loginData.username=='admin' && this.loginData.password=='admin'){
      window.location.href='/condidats'
      
    }
    else if(this.loginData.username.trim()=='' || this.loginData.username==null){
      alert("user name or password incorrect")
    }
    else{
      window.location.href='/user/0'
    }
  }

}
