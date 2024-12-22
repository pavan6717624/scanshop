import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AmazonComponent } from './amazon/amazon.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { DemopageComponent } from './demopage/demopage.component';

const routes: Routes = [

  {path: '', component: AmazonComponent},

  {path: 'dataentry', component: DataentryComponent},
  {path: 'demopage', component: DemopageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
