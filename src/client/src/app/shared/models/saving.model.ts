import { Currency } from './currency.model';
import * as firebase from 'firebase';

export class Saving {
  id: string;
  date = firebase.firestore.Timestamp.fromDate(new Date());
  currency = new Currency();
  type = '';
  amount = 0;
  exchangeRate = 0;
  exchangeRateToday = 0;
}
