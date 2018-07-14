import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Me } from '../entity/me';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  private meSource = new BehaviorSubject<Me>(null);
  me = this.meSource.asObservable();

  constructor(private globalService: GlobalService, private http:Http) {
    this.getMe().subscribe(
      data =>{
        this.updateMe(new Me().deserialize(data.json()));
      });;
   }

  getMe(){
    return this.http.post(this.globalService.serviceHost +"/customer/me",new URLSearchParams(),this.globalService.formTypeOpion);
  }

  updateMe(me:Me){
    this.meSource.next(me);
  }
  
}
