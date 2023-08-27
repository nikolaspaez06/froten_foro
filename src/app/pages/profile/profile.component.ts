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
  user: User | null = null;
  users: User[] = [];
  respuesta: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private ProfileService: ProfileService,
    private AuthService: AuthService) { }


  ngOnInit(): void {
    const loggedInUserId = this.AuthService.getLoggedInUserId();

    if (loggedInUserId) {
      this.route.paramMap.subscribe(paramMap => {

        const id = paramMap.get('id');
        console.log('Id Login: ', id)
        if (id === loggedInUserId) {
          this.ProfileService.getUser(id).subscribe(data => {
            this.user = data;
            console.log(data)

          });
        } else {
          console.error('Error ids diferentes no coinciden')
          // this.router.navigate(['/error']);
        }
      });
    }
  }

  // cargarUser(id: string) {
  //   this.ProfileService.getUser('http://localhost:3000/poofo/${id}')
  //     .subscribe(respuesta => {
  //       this.respuesta = respuesta;
  //     })
  // }

  // getUser(_id: string) {
  //   this.ProfileService.getUser(_id).subscribe(data => {
  //     this.user = data;
  //     console.log(data)
  //   })
  // }

  // getUsers() {
  //   this.ProfileService.getUsers().subscribe(data => {
  //     this.users = data;
  //     console.log(data)
  //   })
  // }



  // ngOnInit(): void {
  //   const _id = this.activerouter.snapshot.paramMap.get('id');
  //   const token = this.gettoken();
  //   console.log(token);
  //   console.log(_id);

  //   if (_id) {
  //     this.ProfileService.getUser(_id).subscribe(data => {
  //       this.user = data;
  //       console.log(data);
  //     });
  //   }
  //   console.log(_id);
  // }

  // gettoken() {
  //   return localStorage.getItem('token')
  // }

  // editUser(_id: string) {
  //   console.log(_id)
  // }

  // title = 'profile';

  // allItems = {
  //   user: 'Alexander',
  //   description: 'Trabajo de foro',
  //   image: 'https://process.filestackapi.com/resize=width:600,height:315,fit:max/quality=value:90/XCJiXIchRDmj0ORyMCRv',
  // };
}
