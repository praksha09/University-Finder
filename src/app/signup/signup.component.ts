import { Component, OnInit } from '@angular/core';
import{Http,HttpModule,Response} from '@angular/http';
import {FormBuilder,Validators,FormGroup,FormControl,RequiredValidator,FormControlName} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Common } from '../common';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  hasSubmitted:boolean;

  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    

    this.signupForm=new FormGroup({
      f_name:new FormControl('',Validators.required),
      l_name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      pwd:new FormControl('',Validators.required)

    });
   // ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
   //,Validators.minLength(8)
}
public onFormSubmit(){
  if(this.signupForm.invalid)
  {
    this.hasSubmitted=true;
    alert("Fill All Details Properly");
     return;
  }
  else{
    this.hasSubmitted=false;

    let info=this.signupForm.value;

      this.http.post(Common.login,info).subscribe(( res:Response) => {
   
           console.log(res);
           this.router.navigate(['/login']);
    })
          
  }
}
}