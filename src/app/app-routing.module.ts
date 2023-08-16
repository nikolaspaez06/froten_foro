import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  // Otras rutas...
  { path: 'register', component: RegisterComponent },

import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
