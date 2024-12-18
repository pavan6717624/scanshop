import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  width: number = window.innerWidth;
  popmenuhover=false;

  menusidebar=false;

  mobilemenuclick=false;

menuOpen=false;


  mobileMenuItems=[{ label: 'Home', icon: 'pi pi-home', routerLink: 'home' }, 
  { label: 'Practices', icon: 'pi pi-pencil', routerLink: 'about', }, 
  { label: 'Initiatives', icon: 'pi pi-sun', routerLink: 'contact' },
  { label: 'Credentails', icon: 'pi pi-id-card', routerLink: 'contact' },
  { label: 'People', icon: 'pi pi-users', routerLink: 'contact' },
  { label: 'Relationships', icon: 'pi pi-sitemap', routerLink: 'contact' },
  { label: 'Contact', icon: 'pi pi-phone', routerLink: 'contact' }];


  constructor(private deviceService: DeviceDetectorService, private route: Router) { }
  menuItems = [{ label: 'Catalyst', icon: 'pi pi-angle-right', routerLink: 'home' }, 
    { label: 'Sports Capital', icon: 'pi pi-angle-right', routerLink: 'about' }, 
    { label: 'Portman', icon: 'pi pi-angle-right', routerLink: 'contact' },
    { label: 'Casper Capital', icon: 'pi pi-angle-right', routerLink: 'contact' },
    { label: 'Levatio', icon: 'pi pi-angle-right', routerLink: 'contact' }];


    menuItems1 = [{ label: 'Investment Banking', icon: 'pi pi-angle-right', routerLink: 'home' }, 
    { label: 'Capital Projects & Infrastructure', icon: 'pi pi-angle-right', routerLink: 'about' }, 
    { label: 'Thematic Consulting', icon: 'pi pi-angle-right', routerLink: 'contact' },
    { label: 'Restructuring & Turnaround', icon: 'pi pi-angle-right', routerLink: 'contact' }];

  isMobile = false;
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

  toHome() {
    this.route.navigate(['home']);
  }

  
}
