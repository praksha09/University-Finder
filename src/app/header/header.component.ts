import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  
  constructor(private data: DataService) { }

  show:boolean;
  ngOnInit() {

    this.data.show.subscribe(show => this.show = show);

    if(!localStorage.getItem("user")){
      this.data.changeShow(true);
    }else{
      this.data.changeShow(false);
    }
  }
  
}
