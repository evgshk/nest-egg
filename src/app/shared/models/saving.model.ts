import { DocumentReference } from '@angular/fire/firestore';

export class Saving {
  id: string;
  date: firebase.firestore.Timestamp;
  currency: DocumentReference;
  currencyRef: string;
  type: string;
  amount: number;
  exchangeRate: number;
  exchangeRateToday: number;
}
