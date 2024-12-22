import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataentryComponent } from './dataentry/dataentry.component';
import { DemopageComponent } from './demopage/demopage.component';

const routes: Routes = [

  { path: 'amazon', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: '', component: DataentryComponent },
  { path: 'demopage', component: DemopageComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
