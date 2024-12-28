import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MessageService } from 'primeng/api';
import { AmazonService } from 'src/app/amazon.service';

@Component({
  selector: 'app-load-product',
  templateUrl: './load-product.component.html',
  styleUrls: ['./load-product.component.css']
})
export class LoadProductComponent implements OnInit {


  data: any;
  affiliateUrl: string = '';
  imageUrl: string = '';
  productName: string = '';
  tagLine: string = '';
  description: string = '';
  keyFeatures: string[] = [];
  productSpecifications: string[] = [];
  benefits: string[] = [];

  whyChoose: string[] = [];
  conclusion: string = '';

  productUrl: string = '';

  price: string = '';

  constructor(private route: ActivatedRoute, private deviceService: DeviceDetectorService, private service: AmazonService, private messageService: MessageService) {
    
    this.productUrl = this.route.snapshot.paramMap.get('productUrl') + "";

  

  }

  getData() {


    var formData = new FormData();
    formData.set("product", this.productUrl);

    console.log(this.productUrl);

    this.loading = true;
    this.service.getPageContent(formData).subscribe(
      (res: any) => {


        console.log(res);
        var data = res;


        

        this.data = data;

        //data=JSON.parse(data);

        // alert(data);


        this.imageUrl = data.imageUrl;
        this.price=data.price;


        this.productName = data.product.replace(/\\n/g, "");
        this.tagLine = data.tagLine.replace(/\\n/g, "");
        this.description = data.description.replace(/\\n/g, "");

        this.keyFeatures = data.keyFeatures.trim().split("\\n");

        this.keyFeatures = this.keyFeatures.filter(o => o.trim().length > 0);

        this.productSpecifications = data.productSpecifications.trim().split("\\n");

        this.productSpecifications = this.productSpecifications.filter(o => o.trim().length > 0);

        this.benefits = data.benefits.trim().split("\\n");

        this.benefits = this.benefits.filter(o => o.trim().length > 0);

        this.whyChoose = data.whyChoose.trim().split("\\n");

        this.whyChoose = this.whyChoose.filter(o => o.trim().length > 0);

        this.affiliateUrl=data.affiliateUrl;

        if (this.whyChoose.length > 3)
          this.whyChoose = this.whyChoose.slice(1, 4);







        this.conclusion = data.conclusion.replace(/\\n/g, "");
        this.loading = false;

      },
      (err: any) => {
        this.loading = false;
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Error Occured. Trying Again...', detail: '' });

      }

    );



  }

  width: number = window.innerWidth;
  isMobile = false;
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.getData();
  }



  loading = false;
  buy() {
    this.loading = true;
    window.location.replace(this.affiliateUrl);
  }
  
}
