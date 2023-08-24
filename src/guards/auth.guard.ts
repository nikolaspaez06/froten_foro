import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if(authService.loggedIn()){
    return true
  }else{
    alert('access denied')
    router.navigate([''])
    return false
  }
};
