import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AmazonService } from 'src/app/amazon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service: AmazonService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPageContents();
  }
loadProduct(productUrl: string)
{
  this.router.navigate(['/loadProduct/'+productUrl]);
}
  loading=false;

  products: any;

  getPageContents()
  {
    var formData=new FormData();
    formData.set("category", "ALL");

    this.loading=true;
    this.service.getPageContents(formData).subscribe(
      (res: any) => {
       
     
        console.log(res);
        
        this.products =res;
        this.loading=false;

      },
    (err:any) => {
      this.loading=false;
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Error Occured. Trying Again...', detail: '' });
    
    }
    
    );
  }

}
