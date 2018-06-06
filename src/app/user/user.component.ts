import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  obj:any;
  info:any;
  constructor(private http:Http) { }

  ngOnInit() {
    this.obj=localStorage.getItem('user_id');
    console.log(this.obj);
    this.getdata();
  }

  public getdata(){
    var url="http://localhost:3000/profileapi/user/"+this.obj;
    this.http.get(url).subscribe(( res2:Response) => this.info=res2.json());
  }

}
