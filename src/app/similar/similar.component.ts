import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms/src/model';
import { Validators } from '@angular/forms';
import { Http ,HttpModule,Response} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {
  info: any;
  similarForm:FormGroup;
  obj:any;
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){
      alert("Please login!");
      this.router.navigate(['/login']);
    }
    this.obj=localStorage.getItem('user_id');
    this.getdata();
  }

  public getdata(){
    var url="http://localhost:3000/profileapi/similar/"+this.obj;
   this.http.get(url).subscribe(( res2:Response) => {this.info=res2.json();
    console.log(this.info);
  });
   
  }
}
