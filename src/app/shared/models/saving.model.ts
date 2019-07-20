import { Currency } from './currency.model';
import * as firebase from 'firebase';

export class Saving {
  id: string;
  date: firebase.firestore.Timestamp = firebase.firestore.Timestamp.fromDate(new Date());
  currency: Currency = new Currency();
  type: string = '';
  amount: number = 0;
  exchangeRate: number = 0;
  exchangeRateToday: number = 0;
}
