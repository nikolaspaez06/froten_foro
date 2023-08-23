import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForoService } from 'src/app/core/service/foro.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  // tittle = "Register";
  // public allitem: any = []

  // addItem(your_name: string, email:string, password: string){
  //   const newTask = {
  //     userName: your_name,
  //     email: email,
  //     password:password

  //   }
  // }

  contactForm!: FormGroup;

  constructor(private foroService: ForoService, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      const newUser = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        password: this.contactForm.value.password,
        admin: ['user']
      };

      this.foroService.addUser(newUser).subscribe(
        response => {
          console.log('Formulario enviado exitosamente:', response);
          alert('Usuario añadido exitosamente');
        },
        error => {
          console.error('Error al enviar el formulario:', error);
        }
      );
    } else {
      // Error message.
    }
  }


  initFrom(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    })
  }
}
