import { Component, OnInit } from '@angular/core';
import{Headers,Response, RequestOptions,HttpModule, Http} from '@angular/http';
import { Validators, FormControl,FormGroup ,Form} from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common/src/i18n/locale_data_api';
import { DatePipe } from '@angular/common';
import { Common } from '../common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data:any;
  constructor(private http:Http,private datePipe: DatePipe,private router:Router) { }

  profileForm:FormGroup;
  hasSubmitted:boolean;
  
  ngOnInit() {
    this.data = localStorage.getItem('user_id');
    console.log("id : "+this.data);
    
    this.getdata();

    this.profileForm=new FormGroup({
      user_id:new FormControl(''),
      father_name:new FormControl('',Validators.required),
      mother_name:new FormControl('',Validators.required),
      dob:new FormControl(Validators.required),
      address:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      school_name:new FormControl('',Validators.required),
      percentage:new FormControl('',Validators.required),
      passing_year:new FormControl('',Validators.required),
      dream_uni:new FormControl('',Validators.required),
      course:new FormControl('',Validators.required),
      joining_year:new FormControl('',Validators.required),
    })
  }

  public onFormSubmit(){
    if(this.profileForm.invalid)
      alert("Fill all Details Properly!");
    else{
      this.profileForm.controls.user_id.setValue(this.data);
      let info=this.profileForm.value;

      this.http.post(Common.profile,info).subscribe(( res:Response) => {
   
           console.log(res);
     }) 
          this.router.navigate(['/user']);
    }
  }

  public getdata()
  {
    var url="http://localhost:3000/profileapi/profile/"+this.data;
    this.http.get(url).subscribe(( res2:Response) => { let info=res2.json();
    let obj=info;
    console.log(obj);
    let da=obj[0].dob;
      
  let d=this.datePipe.transform(da,"yyyy-MM-dd");
 
    this.profileForm.controls.user_id.setValue(obj[0].user_id);
    this.profileForm.controls.father_name.setValue(obj[0].father_name);
    this.profileForm.controls.mother_name.setValue(obj[0].mother_name);
    this.profileForm.controls.dob.setValue(d);
    this.profileForm.controls.address.setValue(obj[0].address);
    this.profileForm.controls.city.setValue(obj[0].city);
    this.profileForm.controls.state.setValue(obj[0].state);
    this.profileForm.controls.school_name.setValue(obj[0].school_name);
    this.profileForm.controls.percentage.setValue(obj[0].percentage);
    this.profileForm.controls.passing_year.setValue(obj[0].passing_year);
    this.profileForm.controls.dream_uni.setValue(obj[0].dream_uni);
    this.profileForm.controls.course.setValue(obj[0].course);
    this.profileForm.controls.joining_year.setValue(obj[0].joining_year);
    })
  }
  public update(){
    if(this.profileForm.invalid)
    {
      this.hasSubmitted=true;
      alert("Fill Properly");
    }
    else{
      this.hasSubmitted=false;
      
      let str=this.profileForm.value;
      console.log(str);
    var url = "http://localhost:3000/profileapi/profile/"+this.data;
         this.http.put(url,str).subscribe(( res:Response) => {
     
              console.log(res);
        
              
     })
     this.router.navigate(['/user']);
    }
  }

}
