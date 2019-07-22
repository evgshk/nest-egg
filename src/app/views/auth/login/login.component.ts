import { Component, OnInit }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [
    `
      .login-form {
        max-width: 300px;
      }

      .login-form-forgot {
        float: right;
      }

      .login-form-button {
        width: 100%;
      }
    `
  ]
})
export class LoginComponent implements OnInit {

  remember = false;
  validateForm: FormGroup;

  submitForm(): void {
    if (this.validateForm.controls) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
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
