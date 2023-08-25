import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://pooforoapi.onrender.com/admins'

  constructor(private http: HttpClient) { }

  public signUp(user:any) {
    return this.http.post<any>(this.URL + '/signup',user)
  }

  public signIn(user:any){
    return this.http.post<any>(this.URL + '/signin',user)
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  gettoken(){
    return localStorage.getItem('token')
  }
}

