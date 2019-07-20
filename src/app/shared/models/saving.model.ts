import { Currency } from './currency.model';

export class Saving {
  id: string;
  date: firebase.firestore.Timestamp;
  currency: Currency;
  type: string;
  amount: number;
  exchangeRate: number;
  exchangeRateToday: number;
}
