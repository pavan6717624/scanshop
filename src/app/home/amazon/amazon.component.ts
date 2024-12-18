import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }

  width: number = window.innerWidth;
  isMobile = false;
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

  buy()
  {
    window.location.replace("https://amzn.to/3ZBqmfA");
  }

}
