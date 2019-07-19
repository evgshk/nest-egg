import { Injectable }                     from '@angular/core';
import { AngularFirestore }               from '@angular/fire/firestore';
import { Currency, ExchangeRate, Saving } from '@shared/models';
import { Observable }                     from 'rxjs';
import { map }                            from 'rxjs/operators';
import * as firebase                      from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  getCurrencies() {
    return this.db.collection('currencies').snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Currency;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  getSavings(): Observable<Saving[]> {
    return this.db.collection<Saving>('savings', ref => ref.orderBy('date'))
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          data.currency.get().then(x => data.currency = x.data() as Currency);
          const item = data as Saving;
          item.currencyRef = data.currency.id;
          return item;
        });
      }));
  }

  getExchangeRate(date: Date): Observable<ExchangeRate[]> {
    const timestamp = firebase.firestore.Timestamp.fromDate(date);
    return this.db.collection<ExchangeRate>(
      'exchange-rates',
      ref => ref
        .where('pair', '==', 'USD_RUB')
        .where('date', '<=', timestamp)
        .orderBy('date', 'desc')
        .limit(1))
      .valueChanges();
  }
}
