import { Component } from '@angular/core';
import { Home } from 'src/app/models/item'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';

  allItems = [{
    user: "Javier",
    description: "Estudio de boodcamp con academy",
    image: "https://process.filestackapi.com/resize=width:600,height:315,fit:max/quality=value:90/XCJiXIchRDmj0ORyMCRv",
    reactions: "false",
    comments: "Es un gran programa"
  }
  ]

  
}
