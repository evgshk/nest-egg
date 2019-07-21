import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService }         from '@shared/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public userService: UserService,
    private router: Router
  ) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.userService.getCurrentUser().then(
        () => {
          this.router.navigate(['main', 'user']);
          return resolve(false);
        },
        () => resolve(true));
    });
  }
}
