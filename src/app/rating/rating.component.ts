import { Component, OnInit } from '@angular/core';
import { Common } from '../common';
import { Http ,Response} from '@angular/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  uni: any;

  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){
      alert("Please login!");
      this.router.navigate(['/login']);
    }

    this.getdata();
  }
  public getdata(){
    this.http.get(Common.unidetails).subscribe(( res2:Response) =>{ this.uni=res2.json()
    console.log(this.uni);
    });
  }
  public getStars(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val/5*100;
    console.log(size);
    return size;
    
  }

}
