import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CondidatService } from '../services/condidat.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
  
  public condidat=
    {
      nom:'',
      prenom:'',
      email:'',
      numt:'',
      lieu:'',
      product:''
    }
 
  ngOnInit() {
 
}constructor(private _category:CondidatService,private _snack:MatSnackBar) {

}


formSubmit(registerForm:NgForm){


this._category.addCondidat(this.condidat).subscribe(
(data)=>{

  Swal.fire('Success !!','Condidat is added successfuly','success');
},
(error)=>{
  Swal.fire('Error !!','Server error','error');

}
);
}
}
