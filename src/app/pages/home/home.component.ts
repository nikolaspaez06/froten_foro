import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Home } from 'src/app/models/item'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';

  // allItems = [{
  //   user: "Javier",
  //   description: "Estudio de boodcamp con academy",
  //   image: "https://process.filestackapi.com/resize=width:600,height:315,fit:max/quality=value:90/XCJiXIchRDmj0ORyMCRv",
  //   reactions: "false",
  //   comments: "Es un gran programa"
  // }
  //]

  @Output() addModel: EventEmitter<{
    user: String, description: String,
    image: String, comments: String
  }> = new EventEmitter<{
    user: String, description: String,
    image: String, comments: String
  }>

  addHomeModel(user: String, description: String,
    image: String, comments: String) {
    this.addModel.emit({
      user, description,
      image, comments
    })
  }
}
