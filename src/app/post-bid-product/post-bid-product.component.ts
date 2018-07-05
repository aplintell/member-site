import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalService } from './../../service/global.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { BiddingProductService } from '../../service/bidding-product.service';

@Component({
  selector: 'post-bid-product',
  templateUrl: './post-bid-product.component.html',
  styleUrls: ['./post-bid-product.component.css']
})
export class PostBidProductComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  picSources = [];
  createForm:FormGroup;
  files:File[] = [];
  imageNames: string[] = [];

  constructor(private fb: FormBuilder, private http:Http, private globalService: GlobalService,
     private translate: TranslateService , private biddingProductService: BiddingProductService ) {
    translate.use("post-bid-product-vn");
   }

  ngOnInit() {
    this.createForm = this.initCreateForm();
  }


  save(){
    // this.biddingProductService.save(this.createForm.get("name").value,this.createForm.get("name").value,
    // this.createForm.get("name").value,this.createForm.get("name").value,this.createForm.get("name").value,
    // this.createForm.get("name").value);
  }

  addImage(){
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            formData.append('file[]', inputEl.files.item(i));
        }
        this.http
            .post(this.globalService.serviceHost+"/biddingProduct/upload", formData).subscribe(
              response => {
                var fileNames:string[] = response.json();
                var files = inputEl.files;
                var output = document.getElementById("result");
                for(var i = 0; i< files.length; i++)
                {
                    var file = files[i];
                    this.files.push(file);
                    //Only pics
                    if(!file.type.match('image')){
                      continue;
                    }
                    this.picSources.push(file);
                    var picReader = new FileReader();
                    var count = 0;
                    picReader.addEventListener("load",function(event){
                        var picFile:any = event.target;
                        
                        var div = document.createElement("div");
                        div.className = "d-inline-block up-img";

                         div.innerHTML = " <img src='"+picFile.result+"' name='"+ fileNames[count] + "' alt='' class='img-responsive'>"+
                         " <a class='close-btn'><i class='fa fa-close'></i></a>"
            
                        output.insertBefore(div,null);            
                        count++;
                    });
                     //Read the image
                    picReader.readAsDataURL(file);
            }},(error: Response) => {throw error});
            // do whatever you do...
            // subscribe to observable to listen for response
    }
  }

  initCreateForm(){
    return this.fb.group({
      name: ['', Validators.required],
      initialPrice: ['', Validators.required],
      priceStep: ['', Validators.required],
      description: ['', Validators.required],
      startDateDay: ['', Validators.required],
      startDateMonth: ['', Validators.required],
      startDateYear: ['', Validators.required],
      endDateDay: ['', Validators.required],
      endDateMonth: ['', Validators.required],
      endDateYear: ['', Validators.required]
    });
  }
}
