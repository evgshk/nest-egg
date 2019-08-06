import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Stock } from '@shared/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  getItems(): Observable<Stock[]> {
    return this.db
      .collection<Stock>('stocks', ref => ref.orderBy('date', 'desc'))
      .valueChanges();
  }

  add(item: Stock): string {
    // TODO - refactor
    const obj = Object.assign({}, item);
    obj.currency = Object.assign({}, obj.currency);

    const id = this.db.createId();
    const documentRef = this.db
      .collection<Stock>('stock')
      .doc(id);
    documentRef.set(obj);

    return id;
  }
}
