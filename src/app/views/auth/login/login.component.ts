import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router }                             from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService }                        from '@shared/services/auth/auth.service';
import { EMAIL_PATTERN, PASSWORD_PATTERN }    from '@components/app-reactive/reactive-lists/patterns';
import { markAllFormFieldsAsTouched }         from '@components/app-reactive/reactive-functions/validation';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.pattern(EMAIL_PATTERN)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(PASSWORD_PATTERN)]),
    isRemembered: new FormControl(null)
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // todo add submit logic later
    } else {
      markAllFormFieldsAsTouched(this.loginForm);
    }
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(() => this.router.navigate(['savings']));
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(() => this.router.navigate(['savings']));
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(() => this.router.navigate(['savings']));
  }
}
