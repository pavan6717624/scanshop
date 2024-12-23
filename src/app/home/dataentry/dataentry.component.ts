import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AmazonService } from 'src/app/amazon.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
 url: string = '';
  constructor(private service: AmazonService, private messageService: MessageService) { }

  loading=false;

  ngOnInit(): void {
  }

  getData()
  {
    var formData=new FormData();
    formData.set("url", this.url);

    this.loading=true;
    this.service.createPageContent(formData).subscribe(
      (res: any) => {
       
        localStorage.setItem("data",JSON.stringify(res));
        window.open("\demopage");
        console.log(res);
        this.messageService.clear();
        this.messageService.add({ severity: 'info', summary: 'Created View Page....', detail: '' });

        this.loading=false;

      },
    (err:any) => {
      this.loading=false;
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Error Occured. Trying Again...', detail: '' });
      this.getData();
    }
    
    );
  }
}
