export class Discussion
{
  public id:number;
  public user_id :number;
  public type_id :number;
  public message:string;
  public dis_id:number;
  constructor(id1:number,uid:number,typeid :number,message:string,disid:number)
  {
     this.id = id1;
     this.user_id = uid;
     this.type_id= typeid;
     this.message= message;
     this.dis_id = disid;
  }

}