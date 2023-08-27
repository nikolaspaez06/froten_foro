import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  // Grupo de formulario para la entrada del usuario.
  contactForm!: FormGroup;

  // Se injectan el servicio de autenticacion,
  // el modulo para manejar las rutas y el FormBuilder para manejar la informacion que se ingresa en el form
  constructor(private authService: AuthService,
    private router: Router,
    private readonly fb: FormBuilder) { }

  // Inicializa el grupo de formulario al cargar el componente.
  ngOnInit(): void {
    this.contactForm = this.initFrom();
  }

  // Var para almacenar el error correspndiente
  errorResponseMessage: string | null = null;

  // Metodo para manejar el login del user
  signIn() {
    // Llama el metodo signIn de authService para la autenticacion del user
    this.authService.signIn(this.contactForm.value)
      .subscribe(res => {
        console.log(res)
        // Alamcena el token en el almacenamiento local.
        localStorage.setItem('token', res.token);

        // Obtiene el id que devuelve el metodo 'getLoggedInUserId' en auth.service
        const userId = this.authService.getLoggedInUserId();
        console.log('Logged In User ID:', userId);
        // Comprueba que el id exista. y en caso de exito lo asigna a la url de destino y lo redirige
        if (userId) {
          this.router.navigate(['/profile', userId]);
        } else {
          console.log('No se encontro id')
        }
      },
        // manejo de la respuesta de los distintos errores
        err => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            this.errorResponseMessage = err.error.message;
          }
        }
      );
  }

  // Muestra en consola la informacion typeada en el formulario de logeo
  onSubmit(): void {
    console.log('form ->', this.contactForm.value);
  }

  //  Inicializa el formulario con reglas de validación.
  initFrom(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}

