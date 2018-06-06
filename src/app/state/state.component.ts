import { Component, OnInit } from '@angular/core';
import { Http ,Response,HttpModule} from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {FilterPipe} from '../filter.pipe';
import { Common } from '../common';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  course: any;
  str: any;
  filterForm:FormGroup;
  uni: any;
  

  constructor(private http:Http) { }

  ngOnInit() {
    this.getdata();
    this.filterForm=new FormGroup({
      cat_id:new FormControl(''),
      c_id:new FormControl(''),
      s_id:new FormControl('')
    })
    }
  public getdata(){
   
    this.http.get(Common.statecat).subscribe(( res2:Response) => this.uni=res2.json());
 
    this.http.get(Common.state).subscribe(( res2:Response) => this.str=res2.json());

    this.http.get(Common.course).subscribe(( res2:Response) => this.course=res2.json());
  }

}
