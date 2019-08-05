import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import { FormControl, Validators }  from '@angular/forms';
import { UserService, AuthService } from '@shared/services';
import { FirebaseUserModel }        from '@shared/models';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

  user = new FirebaseUserModel();
  nameControl = new FormControl('', Validators.required);

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.route.data
      .subscribe(res => {
        const data = res['data'];
        if (data) {
          this.user = data;
          this.nameControl.patchValue(this.user.name);
        }
      });
  }

  onSubmit() {
    if (this.nameControl.valid) {
      this.userService.updateCurrentUser(this.nameControl.valid)
        .then(res => console.log(res), err => console.log(err));
    } else {
      this.nameControl.markAsTouched();
    }
  }

  logout() {
    this.authService.doLogout()
      .then(() => this.location.back(), error => console.log('Logout error', error));
  }
}
