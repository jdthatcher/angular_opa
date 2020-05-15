import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { ListComponent } from './list/list.component';
import { AllComponent } from './all/all.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { TnComponent } from './tn/tn.component';




const routes: Routes = [
  { path: '', component: HomeComponent },             
  { path: 'list', component: ListComponent },   
  { path: 'all', component: AllComponent },
  { path: 'newyork', component: NewyorkComponent },
  { path: 'tn', component: TnComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
