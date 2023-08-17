import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  tittle = "Register";
  public allitem: any = []

  addItem(email:string, password: string){
    const newTask = {
     
      email: email,
      password:password

    }
  }

  contactForm!:FormGroup;

  constructor(private readonly fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.contactForm = this.initFrom();
  }
  onSubmit(): void { 
    console.log('form ->',this.contactForm.value);
  }

  initFrom(): FormGroup {
    return this.fb.group ({
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    })
 }
}

//simulacion bakcend
