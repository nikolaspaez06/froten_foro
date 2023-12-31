import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Home } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private http: HttpClient) { }

  // peticion Para traer todas las publicaciones
  getTask(url: string): Observable<Home[]> {
    return this.http.get<Home[]>(url);
  }

  //Peticion por User Id
  getUsernameById(userId:String): Observable<string>{
    const userUrl = `https://pooforoapi.onrender.com/poofo/${userId}`
    return this.http.get<string>(userUrl)
  }
}

