import { Component, OnInit } from '@angular/core';
import { Http ,Response,HttpModule} from '@angular/http';
import { FormGroup ,Validators,FormControl ,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { Common } from '../common';
import {Discussion} from '../Discussion';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  dis: any[][];
  reply: any;
  info: any;
  typeForm: FormGroup;
  type: any;
  filterForm:FormGroup;
  replyForm:FormGroup;
  
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    if(!localStorage.getItem("user")){
      alert("not login");
      this.router.navigate(['/login']);
    }
    let obj=localStorage.getItem('user_id')
    this.getdata();
    
    this.filterForm=new FormGroup({

      type:new FormControl('')
     
    })
    this.typeForm=new FormGroup({
      dis_id:new FormControl('-1'),
      user_id:new FormControl(obj),
      type_id:new FormControl(''),
      message:new FormControl('',Validators.required)
    })
    this.replyForm=new FormGroup({
      user_id:new FormControl(obj),
      dis_id:new FormControl(''),
      type_id:new FormControl(''),
      message:new FormControl('',Validators.required)
    })
    }
  public getdata(){
  
    this.http.get(Common.type).subscribe(( res2:Response) => this.type=res2.json());
    
   this.http.get(Common.discussion).subscribe(( res2:Response) => {this.info=res2.json()
    console.log(this.info);
    let len=this.info.length;
    this.dis=[[]];
      for(let i=0;i<len;i++){
      let url="http://localhost:3000/dis_api/dis_reply/"+this.info[i].id+"/"+this.info[i].type_id;
      this.http.get(url).subscribe(( res2:Response) => {this.dis[i]=res2.json()
      console.log(this.dis);
  });
  }
});
}

public onSubmit(){
  console.log(this.typeForm.value);
  if(this.typeForm.invalid)
      alert("Fill all Details Properly!");
    else{
      let info=this.typeForm.value;
      this.http.post(Common.discussion,info).subscribe(( res:Response) => {
           console.log(res);
     })      
    }
}

public Submit(i){
  if(this.replyForm.invalid)
    alert("Please reply")

  else{
    console.log(i);
    this.replyForm.controls.dis_id.setValue(i[0].id);
    this.replyForm.controls.type_id.setValue(i[0].type_id);
    let rep=this.replyForm.value;
    console.log(rep);
    
      this.http.post(Common.discussion,rep).subscribe(( res:Response) => {
           console.log(res);
     })  
  }
}

}
