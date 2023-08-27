import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL base para las solicitudes al backend de autenticación
  private URL = 'https://pooforoapi.onrender.com/admins'

  constructor(private http: HttpClient, private router: Router) { }

  // Metodo para obtener el Id del usuario logeado desde el token almacenado
  getLoggedInUserId(): string | null {
    const token = this.gettoken();

    // En caso de que exista el token se procede a decodificarlo
    if (token) {
      // Decodifica el token y retorna el id si existe
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log('Valor id deccodificado: ', payload.id)
      // Si el ID está presente en el token, lo retorna
      if (payload.id) {
        return payload.id;
      }
    }

    // Retorna nulo si no hay token o el ID no está presente
    return null;
  }

  // Realiza el registro de un nuevo usuario
  public signUp(user: any) {
    return this.http.post<any>(this.URL + '/signup', user)
  }

  // Realiza el inicio de sesión de un usuario
  public signIn(user: any) {
    return this.http.post<any>(this.URL + '/signin', user)
  }

  // Verifica si un usuario ha iniciado sesión
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // Obtiene el token almacenado en el local storage
  gettoken() {
    return localStorage.getItem('token')
  }

  // Metodo para salir de sesion, elimina el token y redirige al cliente
  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}

