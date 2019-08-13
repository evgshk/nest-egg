import { Currency } from './currency.model';
import * as firebase from 'firebase';

export class Stock {
  id: string;
  label = '';
  date = firebase.firestore.Timestamp.fromDate(new Date());
  currency = new Currency();
  price = 0;
  amount = 0;
  total = 0;
  currentPrice = 0;
  diff = 0;
}
