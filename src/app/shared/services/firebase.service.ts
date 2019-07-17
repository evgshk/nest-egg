import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Currency } from '../models/currency.model';
import { Saving } from '../models/saving.model';
import { Observable } from 'rxjs';
import { ExchangeRate } from '../models/exchange-rate.model';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(public db: AngularFirestore) { }

    getCurrencies() {
        return this.db.collection('currencies').snapshotChanges()
            .pipe(
                map(changes => {
                    return changes.map(a => {
                        const data = a.payload.doc.data() as Currency;
                        data.id = a.payload.doc.id;
                        return data;
                    });
                })
            );
    }

    public getSavings(): Observable<Saving[]> {
        return this.db.collection<Saving>('savings', ref => ref.orderBy('date'))
            .snapshotChanges()
            .pipe(
                map(changes => {
                    return changes.map(a => {
                        // debugger;
                        const data = a.payload.doc.data() as any;
                        data.id = a.payload.doc.id;
                        data.currency.get()
                            .then((x) => {
                                data.currency = x.data() as Currency;
                            });
                        const item = data as Saving;
                        item.currencyRef = data.currency.id;
                        return item;
                    });
                })
            );
    }

    public getExchangeRate(date: Date): Observable<ExchangeRate[]> {
        const timestamp = firebase.firestore.Timestamp.fromDate(date);
        return this.db
            .collection<ExchangeRate>(
                'exchange-rates',
                ref => ref
                    .where('pair', '==', 'USD_RUB')
                    .where('date', '<=', timestamp)
                    .orderBy('date', 'desc')
                    .limit(1))
            .valueChanges();
    }
}
