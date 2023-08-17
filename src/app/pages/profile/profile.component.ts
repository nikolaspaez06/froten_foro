import { Component } from '@angular/core';
import { profile } from 'src/app/models/item'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  title = 'profile';

  allItems = {
    user: 'Alexander',
    description: 'Trabajo de foro',
    image: 'https://process.filestackapi.com/resize=width:600,height:315,fit:max/quality=value:90/XCJiXIchRDmj0ORyMCRv',
  };
}
