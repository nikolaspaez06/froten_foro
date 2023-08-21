import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    AsideComponent
  ]
})
export class CoreModule { }
