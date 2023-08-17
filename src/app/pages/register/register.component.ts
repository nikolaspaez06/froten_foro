import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  tittle = "Register";
  public allitem: any = []

  addItem(your_name: string, email:string, password: string){
    const newTask = {
      userName: your_name,
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
      name: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(8)]],
    })
}
}
