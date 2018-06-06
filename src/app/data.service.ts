import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

//   private messageSource = new BehaviorSubject<string>("default message");
//   currentMessage = this.messageSource.asObservable();

  private showlogin=new BehaviorSubject<boolean>(true);
  show=this.showlogin.asObservable();

  constructor() { }

//   changeMessage(message: string) {
//     this.messageSource.next(message)
//   }
  changeShow(show:boolean){
      this.showlogin.next(show);
  }

}