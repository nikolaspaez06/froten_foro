import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private URL = 'http://localhost:3000/poofo'

  constructor(private http: HttpClient, private router: Router) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  getUser(_id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/${_id}`);
  }
}
