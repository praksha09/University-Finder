import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators,FormsModule,ReactiveFormsModule,RequiredValidator,FormGroup} from '@angular/forms';
import { Http ,HttpModule,Response} from '@angular/http';
import { login } from '../login';
import { Key } from 'selenium-webdriver';
import { Router } from '@angular/router';
// import {LocalStorage, SessionStorage} from "angular-localstorage";
//import {LOCAL_STORAGE, WebStorageService,StorageServiceModule,SESSION_STORAGE,StorageService} from 'angular-webstorage-service';
import { QueryParamsHandling,Route } from '@angular/router/src/config';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { Input } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  show:boolean;
   key:any; 
   val:any;  
  save:boolean;
  i:any; 
  hasSubmitted: boolean;
  loginForm:FormGroup;
  info:any;
  pass:any;
  id:any;
  @Input()
  app:AppComponent;
  constructor(private http:Http,private router:Router,private data: DataService) { }

  ngOnInit() {
  
    this.data.show.subscribe(show => this.show = show);

    if(localStorage.getItem("user")){
      this.router.navigate(['/home']);
      this.data.changeShow(false);
    }
    else{     
    
  this.loginForm=new FormGroup({
    email:new FormControl('praksha803@gmail.com',Validators.required),
    pwd:new FormControl('',Validators.required),
    rememberMe:new FormControl('')
  });
  this.save=true;
  this.i=localStorage.length;
  this.loginForm.controls.email.setValue(localStorage.getItem('email'));
  this.loginForm.controls.pwd.setValue(localStorage.getItem('pwd'));
  console.log(localStorage);
}
  }
  public checked(){
    this.save=!this.save;
  }
  public onFormSubmit(){
    if(this.loginForm.invalid)
    {
      this.hasSubmitted=true;
      alert("Fill All Details Properly");
       return;
    }
    else{
      this.hasSubmitted=false;
      this.key=this.loginForm.controls.email.value;
      if(this.save===true){
      localStorage.clear();
       
       this.val=this.loginForm.controls.pwd.value;
       console.log('key:' + this.key + 'value:' + this.val);
       localStorage.setItem('email',this.key);
       localStorage.setItem('pwd',this.val);
       

      }
        
    var url="http://localhost:3000/loginapi/login/"+this.key;
    this.http.get(url).subscribe(( res2:Response) => { let info=res2.json()
    
      this.pass=info;
      console.log(this.pass[0]);
      this.id=this.pass[0].user_id;
      if(this.pass[0].pwd==this.loginForm.controls.pwd.value)
      {
        console.log(this.pass[0].pwd);
        this.router.navigate(['/profile']);
          localStorage.setItem("user",res2.json());
          localStorage.setItem('user_id',this.id);
          
          this.data.changeShow(false);
        }
      });

      

}
}
}
