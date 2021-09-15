import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './_components/begin/begin.component';
import { DashboardsComponent } from './_components/dashboards/dashboards.component';
import { Error404Component } from './_components/error404/error404.component';
import { WorkshopComComponent } from './_components/workshops/workshop-com/workshop-com.component';

const routes: Routes = [
  {path:'begin-angular',component:BeginComponent},
  {path:'dashboards',component:DashboardsComponent},
  {path:'work-shop/components',component:WorkshopComComponent},
  {path:'',redirectTo:'begin',pathMatch:'full'},
  {path:'**',component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
