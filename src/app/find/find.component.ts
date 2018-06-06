import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {profile} from '../profile';
import { Http ,Response} from '@angular/http';
import { Common } from '../common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  user: any;
  // users: any;

  // searchCtrl:FormControl;
  // filteredSearch: Observable<any[]>;

  // constructor(private http:Http) { }

  // ngOnInit() {
  //   this.searchCtrl = new FormControl();
  //   this.getdata();
  //   this.filteredSearch = this.searchCtrl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map(user => user ? this.filterSearch(user) : this.users)
  //     );
  // }
  // public getdata(){
  //   this.http.get(Common.login).subscribe(( res2:Response) =>{ this.users=res2.json()
  //     console.log(this.users);
  //     });
   
  // }

  // filterSearch(name: string) {
  //   return this.users.filter(user =>
  //     user.f_name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  // }

  constructor(private http:Http,private router:Router){}
  searchForm:FormGroup;
  find:any;

  ngOnInit(){
    if(!localStorage.getItem("user")){
      alert("Please login!");
      this.router.navigate(['/login']);
    }

    this.searchForm=new FormGroup({
      search:new FormControl('')
    })
    
  }
  public getdata(){
    alert(this.find);
    var url="http://localhost:3000/loginapi/find/"+this.find;
    this.http.get(url).subscribe(( res2:Response) =>{ this.user=res2.json()
      let u=this.user
           console.log(u);
    });
  }

  public search(){
    
    this.find=this.searchForm.controls.search.value;

    var url="http://localhost:3000/loginapi/find/"+this.find;
    this.http.get(url).subscribe(( res2:Response) =>{ this.user=res2.json()
      let u=this.user
           console.log(u);
    });
     
    
    
  }

}
