import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { ConfirmationService, MessageService } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  
  

    
  
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    MenuModule,
    SlideMenuModule,
    OverlayPanelModule,
    SharedModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
