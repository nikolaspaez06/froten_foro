import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // URL de la API para obtener datos de usuarios
  private URL = 'https://pooforoapi.onrender.com/poofo/'

  // Inyecta el servicio HttpClient para manejar las solicitudes HTTP
  constructor(private http: HttpClient,
    private router: Router) { }

  // Metodo para obtener todos los usuarios del backend
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  // Metodo par aobtener los datos del usuario logeado,
  // teniendo como parametro su Id
  getUser(id: string): Observable<User> {
    const url = `${this.URL}/${id}`;
    console.log('Requesting user data from:', url);
    return this.http.get<User>(url);
  }

}
