import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http } from '@angular/http';
import { Customer } from '../entity/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private globalService: GlobalService, private http: Http) { }

  isLoginIdExist(loginId: string){
     return this.http.get(this.globalService.serviceHost+"/customer/isLoginIdExist?loginId="+ loginId, this.globalService.formTypeOpion);
  }

  save(customer: Customer){
    return this.http.post(this.globalService.serviceHost + "/customer/save", JSON.stringify(customer),this.globalService.jsonContentTypeOption);
  }
}
