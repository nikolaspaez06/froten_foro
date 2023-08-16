import { Component } from '@angular/core';
import { NgModule } from '@angular/core';




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
      user_name: your_name,
      user_email: email,
      user_password:password

    }
  }


}
