import { Component, OnInit } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {

  url: string = '';
  constructor(private service: AmazonService) { }

  ngOnInit(): void {
  }

  getData()
  {
    var formData=new FormData();
    formData.set("url", this.url);

   
    this.service.createPageContent(formData).subscribe(
      (res: any) => {
        localStorage.setItem("data",JSON.stringify(res));
        window.open("\demopage");
        console.log(res);
      });
  }

}
