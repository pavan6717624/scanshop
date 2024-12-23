import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmazonComponent } from './amazon/amazon.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { DemopageComponent } from './demopage/demopage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'dataentry', component: DataentryComponent},
  {path: 'demopage', component: DemopageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
