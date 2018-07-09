import { BiddingProductService } from './../../service/bidding-product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bidding-product-details',
  templateUrl: './bidding-product-details.component.html',
  styleUrls: ['./bidding-product-details.component.css']
})
export class BiddingProductDetailsComponent implements OnInit {

  productId;
  product;
  category;
  isLoaded:boolean = false;
  imageUrl;

  constructor(private route: ActivatedRoute, private biddingProductService: BiddingProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param=>{
        let data = param.get('bidding-product').split("-");
        this.productId = data[data.length-1];
        this.biddingProductService.get(this.productId).subscribe(
          data => { 
            this.product = data.json().product;
            this.category = data.json().category;
            this.imageUrl = data.json().imageUrl;
            console.log(this.product);
            console.log(this.category);
            this.isLoaded = true;
          });
    })
  }
}
