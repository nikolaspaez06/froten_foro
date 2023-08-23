import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForoService {
  private baseUrl = 'http://localhost:3000';
  private urlApiUsers = 'http://localhost:3000/admins/signup';

  // Token proporcionado
  private authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTU2ODkxMDFkZWE0ZTRhMjFhY2E5MSIsImlhdCI6MTY5Mjc1NjExMywiZXhwIjoxNjkyODQyNTEzfQ.rZkMsiRiUYougI_Buj8BSSnNxMEXw1Jp1cuWHHhy7bc';

  constructor(private http: HttpClient) { }

  public getTask(url: string) {
    return this.http.get(url);
  }

  public getUser(): Observable<any> {
    return this.http.get<any>(this.urlApiUsers);
  }

  // Method to add a new user using the API
  addUser(user: any): Observable<any> {
    // Agrega el token de autorización en el encabezado
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authToken}`
      })
    };

    return this.http.post<any>('http://localhost:3000/poofo/create', user, httpOptions);
  }
}

