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


  contactForm!: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initFrom();
  }

  errorResponseMessage: string | null = null;

  signIn() {
    this.authService.signIn(this.contactForm.value)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.token);

        const userId = this.authService.getLoggedInUserId();
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

  initFrom(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}

