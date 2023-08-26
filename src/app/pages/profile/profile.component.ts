import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/service/profile/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/item';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users: User[] = [];
  user: User[] = [];

  constructor(private router: Router, private activerouter: ActivatedRoute, private ProfileService: ProfileService) { }

  ngOnInit(): void {
    const _id = this.activerouter.snapshot.paramMap.get('id');
    const token = this.gettoken();
    console.log(token);

    if (_id) {
      this.ProfileService.getUser(_id).subscribe(data => {
        this.user = data;
        console.log(data);
      });
    }
  }

  gettoken() {
    return localStorage.getItem('token')
  }

  getUsers() {
    this.ProfileService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
  // getUser(_id: string) {
  //   this.ProfileService.getUser(_id).subscribe(data => {
  //     this.user = data;
  //   })
  // }
  editUser(_id: string) {
    console.log(_id)
  }

  // title = 'profile';

  // allItems = {
  //   user: 'Alexander',
  //   description: 'Trabajo de foro',
  //   image: 'https://process.filestackapi.com/resize=width:600,height:315,fit:max/quality=value:90/XCJiXIchRDmj0ORyMCRv',
  // };
}
