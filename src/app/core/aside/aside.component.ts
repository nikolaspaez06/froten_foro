import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  userId: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.getLoggedInUserId();
  }

  logout() {
    this.authService.logout()
  }
}
