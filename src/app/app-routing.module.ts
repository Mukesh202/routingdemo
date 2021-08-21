import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActivateGuard } from './activate.guard';
import { AdminComponent } from './admin/admin.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"pricing",component:PricingComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"services",component:ServicesComponent},
  {path:"carrier",component:CarrierComponent},
  {path:'admin',component:AdminComponent,canActivate:[ActivateGuard]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
