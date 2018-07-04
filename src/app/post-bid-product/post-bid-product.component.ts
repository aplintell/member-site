import { GlobalService } from './../../service/global.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'post-bid-product',
  templateUrl: './post-bid-product.component.html',
  styleUrls: ['./post-bid-product.component.css']
})
export class PostBidProductComponent implements OnInit {
  @ViewChild('fileInput') inputEl: ElementRef;
  picSources = [];
  formData = new FormData();
  files:File[] = [];

  constructor(private http:Http, private globalService: GlobalService ) { }

  ngOnInit() {
  }


  addImage(event){
    var files = event.target.files;
    var output = document.getElementById("result");
    for(var i = 0; i< files.length; i++)
    {
        var file = files[i];
        this.files.push(file);
        //Only pics
        if(!file.type.match('image'))
          continue;
          // this.picSources.push(files.result);
          // console.log(this.picSources);
        this.picSources.push(file);
        var picReader = new FileReader();

        picReader.addEventListener("load",function(event){
            console.log(event)
            var picFile:any = event.target;
            
            var div = document.createElement("div");
            div.className = "d-inline-block up-img";
            
            // div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
            //         "title='" + picFile.name + "'/>";
             div.innerHTML = " <img src='"+picFile.result+"' alt='' class='img-responsive'>"+
             " <a class='close-btn'><i class='fa fa-close'></i></a>"

            output.insertBefore(div,null);            
        
        });
         //Read the image
        picReader.readAsDataURL(file);
        // this.formData.delete('file[]');
        this.formData.append('file[]', this.picSources as any);
        console.log(this.formData);
    } 
  }

  save(){

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
              console.log(response);
            });
            // do whatever you do...
            // subscribe to observable to listen for response
    }

    // var form = $('#fileUploadForm')[0];
    // var data = new FormData(form);
    // this.http.post(this.globalService.serviceHost+"/biddingProduct/upload", 
    // this.formData, this.globalService.fileTypeOpion).subscribe(response =>{console.log(response)});
  }
}
