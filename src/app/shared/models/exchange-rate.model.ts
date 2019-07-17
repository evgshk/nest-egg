import { Currency } from './currency.model';

export class ExchangeRate {
    id: string;
    date: Date;
    from: Currency;
    to: Currency;
    value: number;
}
