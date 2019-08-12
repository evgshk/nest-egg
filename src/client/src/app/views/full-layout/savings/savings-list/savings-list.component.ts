import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Saving, ExchangeRate, Currency }             from '@shared/models';
import { pick }                                       from 'lodash-es';
import { SavingsAbstract }                            from '../savings-abstract';

const SAVINGS_TABLE_HEADERS = {
  datePrepared: {label: 'Date', type: 'date', isSortable: true},
  currencyCode: {label: 'Currency', isSortable: true},
  type: {label: 'Type', isSortable: true},
  amount: {label: 'Amount', type: 'rounded-number', isSortable: true},
  exchangeRate: {label: 'Rate', type: 'rounded-number', isSortable: true},
  total: {label: 'Total', type: 'rounded-number', isSortable: true},
  exchangeRateToday: {label: 'Rate Today', type: 'rounded-number', isSortable: true},
  totalToday: {label: 'Total Today', type: 'rounded-number', isSortable: true},
  diff: {label: 'Diff', type: 'rounded-number', isSortable: true}
};
const SHORT_HEADERS_LIST = ['datePrepared', 'currencyCode', 'type', 'amount'];
const ADD_EDIT_FORM = [
  {fieldId: 'datePrepared', label: 'Date', type: 'date-picker', isRequired: true, rowPosition: 12},
  {fieldId: 'currencyCode', label: 'Currency Code', type: 'input', isRequired: true, rowPosition: 4},
  {fieldId: 'currencyNumber', label: 'Currency Number', type: 'input', isRequired: true, rowPosition: 4},
  {fieldId: 'currencyName', label: 'Currency Name', type: 'input', isRequired: true, rowPosition: 4},
  {fieldId: 'type', label: 'Type', type: 'input', isRequired: true, rowPosition: 12},
  {fieldId: 'amount', label: 'Amount', type: 'input', isRequired: true, rowPosition: 12},
  {fieldId: 'exchangeRate', label: 'Exchange Rate', type: 'input', isRequired: true, rowPosition: 12},
  {fieldId: 'exchangeRateToday', label: 'Exchange Rate for Today', type: 'input', isRequired: true, rowPosition: 12}
];

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'savings-list.component.html'
})
export class SavingsListComponent extends SavingsAbstract implements OnInit {

  headersFull = SAVINGS_TABLE_HEADERS;
  headersShort = pick(SAVINGS_TABLE_HEADERS, SHORT_HEADERS_LIST);

  fullMode = false;
  isSubmitted = false;

  savingAddEditForm = ADD_EDIT_FORM;
  savingsList: Saving[] = [];
  exchangeRate = new ExchangeRate();

  ngOnInit() {
    this.getSavings();
    this.getExchangeRatesForToday();
  }

  getSavings() {
    this.loadingService.isLoading(true);
    this.savingService.getItems()
      .subscribe(res => {
        this.savingsList = res && res.length ? res.map(x => ({
          ...x,
          datePrepared: x['date']['seconds'] * 1000,
          currencyCode: x['currency']['code'],
          total: x['amount'] * x['exchangeRate'],
          totalToday: x.amount * x.exchangeRateToday,
          diff: x.amount * x.exchangeRateToday - x.amount * x.exchangeRate
        })) : [];
        this.loadingService.isLoading(false);
        this.cdr.markForCheck();
      });
  }

  getExchangeRatesForToday() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    this.exchangeRateService.getItemByDate(date)
      .subscribe((result: ExchangeRate[]) => {
        this.exchangeRate = result[0];
        this.savingsList.forEach(x => ({
          ...x,
          exchangeRateToday: x.exchangeRate !== 1 ? this.exchangeRate.value : 1,
          totalToday: x.amount * x.exchangeRateToday,
          diff: x.amount * x.exchangeRateToday - x.amount * x.exchangeRate
        }));
      });
  }

  addSaving(e) {
    console.log(e);
  }
}
