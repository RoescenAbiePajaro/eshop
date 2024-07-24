import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'dashboard',component:DashboardComponent},
{path:'productlist',component:ProductListComponent},

{
  path: '', redirectTo: 'productlist', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
