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

  dataFromReceiver: {
    user: string,
    description: string,
    image: string
  } | null = null;
  allItems = {
    reactions: 'false',
    comments: 'Es un excelente bootcamp',
  };

  receiveData(data: {
    user: string,
    description: string,
    image: string
  }) {
    this.dataFromReceiver = data;
    console.log('Data received:', this.dataFromReceiver);
  }

  get items() {
    const combinedData = {
      ...this.dataFromReceiver,
      ...this.allItems
    };
    return combinedData;
  }
}
