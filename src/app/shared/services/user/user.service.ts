import { Injectable } from '@angular/core';
import * as firebase  from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function (userProfile) {
        if (userProfile) {
          resolve(userProfile);
        } else {
          reject('No user logged in');
        }
      });
    });
  }

  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

}
