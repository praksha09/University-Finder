import { Component, OnInit } from '@angular/core';
import { Http ,Response} from '@angular/http';

@Component({
  selector: 'app-mydisc',
  templateUrl: './mydisc.component.html',
  styleUrls: ['./mydisc.component.css']
})
export class MydiscComponent implements OnInit {

  data:any;
  info:any;
  constructor(private http:Http) { }

  ngOnInit() {
    
    this.data=localStorage.getItem('user_id');
    console.log(this.data);
    this.getdata();
  }
  public getdata(){
    var url="http://localhost:3000/dis_api/dis_user/"+this.data;
    this.http.get(url).subscribe(( res2:Response) =>{this.info=res2.json()
    let i=this.info;
    console.log(i);
    });
    }

    public remove(d){
      var con=confirm("Want to delete record?");
    if(con)
    {
      var url="http://localhost:3000/dis_api/discussion/"+d;
    this.http.delete(url).subscribe((res:Response)=> alert("Deleted Successfully"));
    }
    
    }
  

}
