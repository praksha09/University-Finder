import { Component, OnInit, ViewChild} from '@angular/core';
import{Http,Headers,Response, RequestOptions,HttpModule} from '@angular/http';
import{HomeComponent} from '../home/home.component';
import{state} from '../state';
import { FormGroup, FormControl, Validators,Form,FormControlName,FormGroupName ,ReactiveFormsModule} from '@angular/forms';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Input } from '@angular/core/src/metadata/directives';
import { Router,ActivatedRoute } from '@angular/router';
import { QueryParamsHandling,Route } from '@angular/router/src/config';
import 'rxjs/add/operator/filter'; 
import { global} from '@angular/core/src/util';
import {FilterPipe} from '../filter.pipe';
import { Common } from '../common';
import { } from '@types/googlemaps';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,AfterViewInit{
  ngAfterViewInit(){
    
  }
@ViewChild('gmap') gmapElement: any;
marker: google.maps.Marker; 
map: google.maps.Map;
  loc:any;
  category: any;
  cat: any;
  course: any;
  str: any;
  obj:any;
  statearr:state[];
  len:any;

  constructor(private http:Http,private router:Router,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      this.obj=params;
      console.log(this.obj);
    });
  }

  filterForm:FormGroup;
  public uni;


  ngOnInit() {
    this.getdata();

    this.filterForm=new FormGroup({
      cat_id:new FormControl(''),
      c_id:new FormControl(''),
      s_id:new FormControl('')
    });
  }

  public getdata(){
    
    var url="http://localhost:3000/uniapi/unidetails/"+this.obj.s_id;
    this.http.get(url).subscribe(( res2:Response) => this.uni=res2.json());

    this.http.get(Common.state).subscribe(( res2:Response) =>{ this.str=res2.json();
    this.statearr=this.str;
    this.len=this.statearr.length;
  
   // console.log(this.len);
   //this.change();
   //this.ngAfterViewInit();
   //this.change();
  })
    
    this.http.get(Common.course).subscribe(( res2:Response) => this.course=res2.json());

    this.http.get(Common.category).subscribe(( res2:Response) => this.category=res2.json());

     
  }
  public change(){    
    alert(this.len);
    for( var i=0;i< this.len; i++ )
    {
     // alert(this.filterForm.controls.str[i].s_id);
      if(this.filterForm.controls.s_id[i].checked)
      alert('hi');  
     
     
    }
  }
  public link(){
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.marker = new google.maps.Marker();
    this.marker.setPosition(mapProp.center);
    this.marker.setMap(this.map);
    console.log(mapProp);
  }
  public ten(){
    
    this.http.get(Common.university).subscribe(( res2:Response) => this.uni=res2.json());
  }
 
}
