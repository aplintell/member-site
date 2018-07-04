import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http } from '@angular/http';
import { Customer } from '../entity/customer';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private globalService: GlobalService, private http: Http) { }

  getCategories(){
    return this.http.get(this.globalService.serviceHost + "/category/getActiveCategories", this.globalService.jsonContentTypeOption);
  }
}
