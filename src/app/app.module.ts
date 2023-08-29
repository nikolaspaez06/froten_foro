import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from './core/service/token/token.service';
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

