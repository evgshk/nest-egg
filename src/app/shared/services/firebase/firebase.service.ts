import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Currency, ExchangeRate, Saving } from '@shared/models';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  getCurrencies(): Observable<Currency[]> {
    return this.db
      .collection<Currency>('currencies', ref => ref
        .orderBy('name', 'desc'))
      .valueChanges();
  }

  getSavings(): Observable<Saving[]> {
    return this.db
      .collection<Saving>('savings', ref => ref
        .orderBy('date', 'desc'))
      .valueChanges();
  }

  getExchangeRate(date: Date): Observable<ExchangeRate[]> {
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
