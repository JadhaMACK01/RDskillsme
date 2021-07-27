import { DashboardpageComponent } from './dashboard/dashboardpage/dashboardpage.component';
import { LoginComponent } from './account/components/login/login.component';
import { RegisterComponent } from './account/components/register/register.component';
import { ResetPasswordComponent } from './account/components/reset-password/reset-password.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'dashboardpage',component:DashboardpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
