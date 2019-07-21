import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(() => this.router.navigate(['main', 'user']));
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(() => this.router.navigate(['main', 'user']));
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(() => this.router.navigate(['main', 'user']));
  }

}
