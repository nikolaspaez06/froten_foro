import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AsideComponent
  ]
})
export class CoreModule { }
