import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';



@NgModule({
  declarations: [
    DashboardpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardpageComponent
  ]
})
export class DashboardModule { }
