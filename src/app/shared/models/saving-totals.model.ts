import { DocumentReference } from '@angular/fire/firestore';
import { Currency }          from './currency.model';

export class SavingTotals {
  id: string;
  currency: Currency;
  currencyDocument: DocumentReference;
  currencyRef: string;
  value: number;
  total: number;
}
