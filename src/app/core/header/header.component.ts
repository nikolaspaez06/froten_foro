import { Component, EventEmitter, Output } from '@angular/core';
import { Home } from 'src/app/models/item'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() addModel: EventEmitter<{
    user: String, description: String,
    image: String
  }> = new EventEmitter<{
    user: String, description: String,
    image: String
  }>

  addHomeModel() {
    const allItems = {
      user: "Javier",
      description: "Estudio de bootcamp con academy",
      image: "https://process.filestackapi.com/resize=width:600,height:315,fit:max/quality=value:90/XCJiXIchRDmj0ORyMCRv",
    };
    this.addModel.emit(allItems)
  }
}
// En CASO Para definir si el usuario no asigna foto de perfil colocar una por defecto // tipo facebook

