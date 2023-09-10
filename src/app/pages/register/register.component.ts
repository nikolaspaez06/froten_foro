import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  contactForm!: FormGroup;

  constructor(private authService: AuthService,
    private readonly fb: FormBuilder,
    private router: Router) { }

  //  Inicializa el grupo de formulario y el metodo para regisrarse al cargar el componente.
  ngOnInit(): void {
    this.contactForm = this.initFrom();
    this.signUp()
  }
  // Var para guardar y manejar el error
  errorResponseMessage: string | null = null;

  // Metodo para manejar el registro del usuario
  signUp() {
    this.authService.signUp(this.contactForm.value)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.token)

        // Obtiene el ID del usuario logueado.
        const userId = this.authService.getLoggedInUserId();
        // Redirige al perfil del usuario si los IDs coinciden.
        if (userId) {
          this.router.navigate(['/profile', userId]);
        } else {
          console.log('No se encontro id')
        }
      },
        err => {
          console.log(err);
          if (err instanceof HttpErrorResponse) {
            this.errorResponseMessage = err.error.message;
          }
        }
      );
  }

  onSubmit(): void {
    console.log('form ->', this.contactForm.value);
  }

  //  Inicializa el formulario con reglas de validación.
  initFrom(): FormGroup {
    return this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}
