import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { QueryParamsHandling,Route } from '@angular/router/src/config';
import { Common } from '../common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  course: any;
  state: any;
  id:10;
  obj:any;
  
   constructor(private router:Router,private http:Http,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.obj=params;
  });
}

  ngOnInit() {
    if(!localStorage.getItem("user")){
      alert("Please login!");
      this.router.navigate(['/login']);
    }
    this.getdata();
    this.homeForm=new FormGroup({      
      c_id:new FormControl('1',Validators.required),
      s_id:new FormControl('1',Validators.required)
    })
  }
  public getdata(){
   
    this.http.get(Common.course).subscribe(( res2:Response) => this.course=res2.json());
 
    this.http.get(Common.state).subscribe(( res2:Response) => this.state=res2.json());
}
public submit(){
  let c=this.homeForm.value;
    this.router.navigate(['/details'],{queryParams:{'c_id':c.c_id,'s_id':c.s_id}});

}
  
    
}


