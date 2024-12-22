import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.component.html',
  styleUrls: ['./demopage.component.css']
})
export class DemopageComponent implements OnInit {

  data:any;

  imageUrl: string ='';
  productName: string = '';
  tagLine: string = '';
  description: string = '';
  keyFeatures: string[]=[];
  productSpecifications: string[] = [];
  benefits: string []=[];
  
  whyChoose: string[]=[];
  conclusion: string = '';
  

  constructor(private deviceService: DeviceDetectorService) {

     var data : any =localStorage.getItem("data");

    data=JSON.parse(data);

     this.imageUrl=data.imageUrl;
     this.productName =data.product;
     this.tagLine=data.tagLine;
     this.description = data.description;
     this.keyFeatures=data.keyFeatures.split(".");

     this.productSpecifications =data.productSpecifications.split(".");
     this.benefits=data.benefits.split(".");
    this.whyChoose = data.whyChoose.split(".");





     this.conclusion = data.conclusion;

   }

   width: number = window.innerWidth;
   isMobile = false;
   ngOnInit(): void {
     this.isMobile = this.deviceService.isMobile();
   }
 loading=false;
   buy()
   {
     this.loading=true;
     window.location.replace("https://amzn.to/3ZBqmfA");
   }
}
