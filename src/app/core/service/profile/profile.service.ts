import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private URL = 'https://pooforoapi.onrender.com/poofo/'

  constructor(private http: HttpClient,
    private router: Router) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  getUser(id: string): Observable<User> {
    const url = `${this.URL}/${id}`;
    console.log('Requesting user data from:', url);
    return this.http.get<User>(url);
  }

}
