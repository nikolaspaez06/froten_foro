import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AsideComponent } from './core/aside/aside.component';



const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path: 'register', component: RegisterComponent },
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path: 'aside',component:AsideComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
