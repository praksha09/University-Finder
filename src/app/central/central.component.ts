import { Component, OnInit } from '@angular/core';
import { Http ,Response} from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { state } from '../state';
import {FilterPipe} from '../filter.pipe';
import { Common } from '../common';

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {
  icon: any;
  category: any;
  course: any;
  str: any;
  uni: any;
  filterForm:FormGroup;
  arr:string[];
  statearr:state[];

  constructor(private http:Http) { }

  ngOnInit() {
   
    this.filterForm=new FormGroup({
      cat_id:new FormControl(''),
      c_id:new FormControl(''),
      s_id:new FormControl('')
    })
    this.getdata();
    }

  public getdata(){
    
    this.http.get(Common.central).subscribe(( res2:Response) => this.uni=res2.json());

    this.http.get(Common.state).subscribe(( res2:Response) => {this.str=res2.json()
      //console.log(this.str);
      for(var i=0;i<this.str.length;i++){
        //console.log("sid=>"+this.str[i].s_id);
        this.filterForm.addControl(this.str[i].s_id,new FormControl(''));
        //console.log(this.filterForm.value)
      }
    this.statearr=this.str;
    });
    this.http.get(Common.course).subscribe(( res2:Response) => this.course=res2.json());

    this.http.get(Common.category).subscribe(( res2:Response) => this.category=res2.json());

  }

  public submit(){
    let j=0;
    alert(this.statearr.length);
    //alert(this.filterForm.controls.statearr[j].s_id.value);
    for(var i=0;i<this.statearr.length;i++){
    if(this.filterForm.controls.statearr[i].s_id.value.checked)
    {
      alert(j);
      this.arr[j]=this.filterForm.controls.statearr[i].s_id.value;
      j++;
    }     
    }
  }

  public editcheck(s_id){
    console.log(s_id);
    console.log(this.filterForm.controls.s_id);

    //this.filterForm.controls.loc.value.checked=!this.filterForm.controls.loc.value.checked;
   // this.filterForm.controls.index.value.checked=!this.filterForm.controls.index.value.checked;
    

   let url="http://localhost:3000/uniapi/unidetails/1/"+s_id;
   this.http.get(url).subscribe(( res2:Response) => {
     this.uni=res2.json();
     console.log(this.uni);
  let uniarr=this.uni;
  console.log(uniarr);
  });
  
}
}
