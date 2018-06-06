import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private data:DataService) { }

  ngOnInit() {
    
    if(localStorage.getItem("user")){
      alert("logout");
      // var head=new HeaderComponent()
      // head.show=false
      this.data.changeShow(true);
      localStorage.removeItem("user");
      localStorage.removeItem("user_id");      
      this.router.navigate(['/login']);
      
    }
  }

}
