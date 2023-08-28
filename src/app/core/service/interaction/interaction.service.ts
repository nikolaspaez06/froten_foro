import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private apiUrl = 'https://pooforoapi.onrender.com/'
  constructor(private http: HttpClient) { }

  // Url Peticion Estado de Like
  likePublication(publicationId: string):Observable<any>{
    return this.http.patch(`${this.apiUrl}interactions/update/${publicationId}`,{like: true})
  }

  // Url Peticion Remover Like
  unlikePublication(publicationId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}interactions/delete/${publicationId}`);
  }

  commentPublication(publicationId:string):Observable<any>{
    return this.http.patch(`${this.apiUrl}interactions/update/${publicationId}`,{comment: String})
  }
}
