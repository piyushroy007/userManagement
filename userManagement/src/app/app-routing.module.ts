import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistingComponent } from './components/customerlisting/customerlisting.component';
import { HomeComponent } from './components/home/home.component';
import { AssociatelistingComponent } from './components/associatelisting/associatelisting.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './gaurd/login.guard';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[loginGuard]},
  {path:'associate',component:AssociatelistingComponent,canActivate:[loginGuard]},
  {path:'customer',component:CustomerlistingComponent,canActivate:[loginGuard]},
  {path:'user',component:UserlistComponent,canActivate:[loginGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
