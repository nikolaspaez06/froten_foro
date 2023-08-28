import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/service/profile/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/item';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // Propiedad para almacenar los datos del usuario
  user: User | null = null;
  users: User[] = [];
  respuesta: any;

  // Inyecta los servicios necesarios y el enrutador
  constructor(private router: Router,
    private route: ActivatedRoute,
    private ProfileService: ProfileService,
    private AuthService: AuthService) { }

  // Se ejecuta al cargar el componente
  ngOnInit(): void {
    // Obtiene el ID del usuario logueado desde el servicio de autenticación
    const loggedInUserId = this.AuthService.getLoggedInUserId();

    if (loggedInUserId) {
      this.route.paramMap.subscribe(paramMap => {

        // Obtiene el ID de usuario de la URL
        const id = paramMap.get('id');
        console.log('Id Login: ', id)

        // Comprueba si el ID de usuario de la URL coincide con el usuario logueado
        if (id === loggedInUserId) {
          // Obtiene los datos del usuario desde el servicio de perfil
          this.ProfileService.getUser(id).subscribe(data => {
            this.user = data;
            console.log(data)

          });
        } else {
          console.error('Error ids diferentes no coinciden')
          // this.router.navigate(['/error']);
        }
      });
    }
  }

}
