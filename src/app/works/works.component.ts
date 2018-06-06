import { Component, OnInit } from '@angular/core';
import{Http,Headers,Response, URLSearchParams, RequestOptions,HttpModule} from '@angular/http';
import {course} from '../course';
import { Router } from '@angular/router';
import {FilterPipe} from '../filter.pipe';
import { Common } from '../common';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  public str;
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){
      alert("Please login!");
      this.router.navigate(['/login']);
    }
    this.getdata();
  }
  public getdata(){
    
      this.http.get(Common.course).subscribe(( res2:Response) => this.str=res2.json());
      console.log(this.str);
  }

}
