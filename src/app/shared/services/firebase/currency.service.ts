import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Currency } from '@shared/models';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  getItems(): Observable<Currency[]> {
    return this.db
      .collection<Currency>('currencies', ref => ref
        .orderBy('name', 'desc'))
      .valueChanges();
  }
}
