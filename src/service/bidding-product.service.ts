import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http, URLSearchParams, Headers } from '@angular/http';

@Injectable()
export class BiddingProductService {

  constructor(private globalService: GlobalService, private http:Http) { }

  save(name, initialPrice, priceStep, description, startDate, endDate, imageNames){
    let params = new URLSearchParams();
    params.set('name', name);
    params.set('initialPrice', initialPrice);
    params.set('priceStep', priceStep);
    params.set('description', description);
    params.set('startDate', startDate);
    params.set('endDate', endDate);
    params.set('imageNames', imageNames);
    return this.http.post(this.globalService.serviceHost + "/bidding-product/save", params, this.globalService.formTypeOpion);
  }

}
