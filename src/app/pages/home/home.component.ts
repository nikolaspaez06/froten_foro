import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { Home } from 'src/app/models/item'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: '<app-home (addModel) = "receiveData($event)>"</app-home>',
})
export class HomeComponent {
  title = 'home';

  items = {
    reactions: 'false',
    comments: 'Es un excelente bootcamp',
  }
  receiveData(data: {
    user: String,
    description: String,
    image: String
  }) {
    console.log('Data received:', data);
  }
}
