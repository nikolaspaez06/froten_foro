import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req:any, next:any) {
    const tokennzeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.gettoken()}`
      }
    })
    return next.handle(tokennzeReq)

  }
}
