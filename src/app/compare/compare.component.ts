import { Component, OnInit } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Common } from '../common';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  c2: any;
  c1: any;
  uni2: any;
  uni1: any;
  uni: any;
  compareForm:FormGroup;
  show:boolean=false;

  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){
      alert("Please login!");
      this.router.navigate(['/login']);
    }
    this.getdata();
    this.compareForm=new FormGroup({
      u_name1:new FormControl('',Validators.required),
      u_name2:new FormControl('',Validators.required)
    })
  }
  public getdata(){

    this.http.get(Common.university).subscribe(( res2:Response) =>this.uni=res2.json());
  }

  public compare(){
    this.show=true;
    console.log(this.compareForm.controls.u_name1.value);
    let uid1=this.compareForm.controls.u_name1.value;
    let uid2=this.compareForm.controls.u_name2.value;

    let url="http://localhost:3000/uniapi/uni_compare/"+uid1;
    this.http.get(url).subscribe(( res2:Response) => {this.uni1=res2.json()
    let u=this.uni1;
    console.log(this.uni1);
    });
    let url2="http://localhost:3000/uniapi/uni_compare/"+uid2; 
    this.http.get(url2).subscribe(( res2:Response) => this.uni2=res2.json()); 
    
    let url3="http://localhost:3000/unicourse/uni_course/"+uid1; 
    this.http.get(url3).subscribe(( res2:Response) =>{ this.c1=res2.json()
    console.log(this.c1);
    });
    let url4="http://localhost:3000/unicourse/uni_course/"+uid2; 
    this.http.get(url4).subscribe(( res2:Response) =>{ this.c2=res2.json()
    console.log(this.c1);
    });
    
  }

}
