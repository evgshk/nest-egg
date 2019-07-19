import { Injectable }                              from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService }                             from '@shared/services';
import { FirebaseUserModel }                       from '@shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<FirebaseUserModel> {

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<FirebaseUserModel> {

    const user = new FirebaseUserModel();

    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
        .then(res => {
          const isPassword = res.providerData[0].providerId === 'password';
          user.image = isPassword ? 'https://via.placeholder.com/400x300' : res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;
          return resolve(user);
        }, err => {
          this.router.navigate(['/login']);
          return reject(err);
        });
    });
  }
}
