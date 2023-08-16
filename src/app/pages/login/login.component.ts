import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  tittle = "login"

  allItems = [
    { user_name: "nicolas", user_email: "jaja@jaja.com", user_password: "asasas" }, 
  ];


}
//simulacion bakcend