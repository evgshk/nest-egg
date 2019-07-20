import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExchangeRate } from '@shared/models';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  getItemByDate(date: Date): Observable<ExchangeRate[]> {
    const timestamp = firebase.firestore.Timestamp.fromDate(date);
    return this.db
      .collection<ExchangeRate>('exchange-rates', ref => ref
        .where('pair', '==', 'USD_RUB')
        .where('date', '<=', timestamp)
        .orderBy('date', 'desc')
        .limit(1))
      .valueChanges();
  }
}
