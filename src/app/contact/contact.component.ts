import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormControl,RequiredValidator,FormControlName} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Http ,HttpModule} from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Common } from '../common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  con: any;

  contactForm:FormGroup;
  hasSubmitted:boolean;
  constructor(private http:Http) { }

  ngOnInit() {
    this.contactForm=new FormGroup({
      fname:new FormControl('',Validators.required),
      subject:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      message:new FormControl('',Validators.required)
    })
  }
  public onFormSubmit(){
    if(this.contactForm.invalid)
    {
      this.hasSubmitted=true;
      alert("Fill All Details Properly");
       
    }
    else{
      this.hasSubmitted=false;
      let con=this.contactForm.value;
      this.http.post(Common.contact,con).subscribe(( res2:Response) => console.log(res2.json()));
    }
  }


}
