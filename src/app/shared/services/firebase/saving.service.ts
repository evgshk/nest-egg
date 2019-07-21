import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Saving } from '@shared/models';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  constructor(
    private db: AngularFirestore
  ) {
  }

  getItems(): Observable<Saving[]> {
    return this.db
      .collection<Saving>('savings', ref => ref
        .orderBy('date', 'desc'))
      .valueChanges();
  }

  add(item: Saving): string {
    // TODO - refactor
    const obj = Object.assign({}, item);
    obj.currency = Object.assign({}, obj.currency);

    const id = this.db.createId();
    const documentRef = this.db
      .collection<Saving>('savings')
      .doc(id);
    documentRef.set(obj);

    return id;
  }
}
