import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MessageService } from 'primeng/api';
import { AmazonService } from 'src/app/amazon.service';

@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.component.html',
  styleUrls: ['./demopage.component.css']
})
export class DemopageComponent implements OnInit {

  
    data:any;
    affiliateUrl: string = '';
  
    imageUrl: string ='';
    productName: string = '';
    tagLine: string = '';
    description: string = '';
    keyFeatures: string[]=[];
    productSpecifications: string[] = [];
    benefits: string []=[];
    
    whyChoose: string[]=[];
    conclusion: string = '';
    
  
    constructor(private deviceService: DeviceDetectorService, private service: AmazonService, private messageService: MessageService) {
      this.getData();
    }

    getData()
    {
  
       var data : any =localStorage.getItem("data");

       this.data=data;
  
      data=JSON.parse(data);

     

  
       this.imageUrl=data.imageUrl;
       this.productName =data.product.replace(/\\n/g,"");
       this.tagLine=data.tagLine.replace(/\\n/g,"");
       this.description = data.description.replace(/\\n/g,"");
       
       this.keyFeatures=data.keyFeatures.trim().split("\\n");

       this.keyFeatures= this.keyFeatures.filter(o=>o.trim().length > 0);
  
       this.productSpecifications =data.productSpecifications.trim().split("\\n");

       this.productSpecifications= this.productSpecifications.filter(o=>o.trim().length > 0);

       this.benefits=data.benefits.trim().split("\\n");

       this.benefits= this.benefits.filter(o=>o.trim().length > 0);

      this.whyChoose = data.whyChoose.trim().split("\\n");

      this.whyChoose= this.whyChoose.filter(o=>o.trim().length > 0);

      this.affiliateUrl=data.affiliateUrl;

      if(this.whyChoose.length > 3)
        this.whyChoose = this.whyChoose.slice(1,4);


  
  
  
  
  
       this.conclusion = data.conclusion.replace(/\\n/g,"");
  
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
       window.location.replace(this.affiliateUrl);
     }
     editVisible=false;
     edit()
     {
      this.editVisible=true;
      return false;
     }

     save()
     {
      var formData=new FormData();
      formData.set("data", this.data);
  
      this.loading=true;
      this.service.savePageContent(formData).subscribe(
        (res: any) => {
         
          this.messageService.clear();
          this.messageService.add({ severity: 'info', summary: 'Saved Page....', detail: '' });
  
          this.loading=false;
  
        },
      (err:any) => {
        this.loading=false;
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Error Occured. Try Again...', detail: '' });
       
      }
      
      );
      return false;
     }

     editData()
     {
      localStorage.setItem("data",this.data);
      this.editVisible=false;
      this.getData();
     }
}
