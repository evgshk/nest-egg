import { Currency } from './currency.model';
import { DocumentReference } from '@angular/fire/firestore';

export class SavingTotals {
    id: string;
    currency: Currency;
    currencyDocument: DocumentReference;
    currencyRef: string;
    value: number;
    total: number;
}
