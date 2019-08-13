import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators }         from '@angular/forms';
import { Saving, ExchangeRate, Currency }             from '@shared/models';
import { markAllFormFieldsAsTouched }                 from '@components/app-reactive/reactive-functions/validation';
import { SavingsAbstract }                            from '../savings-abstract';

const SAVINGS_TABLE = {
  headers: {
    dateSeconds: {label: 'Date', type: 'seconds', isSortable: true},
    currencyCode: {label: 'Currency', isSortable: true},
    type: {label: 'Type', isSortable: true},
    amount: {label: 'Amount', type: 'rounded-number', isSortable: true},
    exchangeRate: {label: 'Rate', type: 'rounded-number', isSortable: true},
    total: {label: 'Total', type: 'rounded-number', isSortable: true},
    exchangeRateToday: {label: 'Rate Today', type: 'rounded-number', isSortable: true},
    totalToday: {label: 'Total Today', type: 'rounded-number', isSortable: true},
    diff: {label: 'Diff', type: 'rounded-number', isSortable: true}
  }
};

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'savings-list.component.html'
})
export class SavingsListComponent extends SavingsAbstract implements OnInit {

  headers = SAVINGS_TABLE['headers'];

  savingsList: Saving[] = [];
  exchangeRate = new ExchangeRate();

  savingAddForm = new FormGroup({
    date: new FormControl(null, Validators.required),
    currency: new FormGroup({
      code: new FormControl(null, Validators.required),
      number: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required)
    }),
    type: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required),
    exchangeRate: new FormControl(null, Validators.required),
    exchangeRateToday: new FormControl(null, Validators.required)
  });

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
          dateSeconds: x['date']['seconds'],
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

  addSaving() {
    if (this.savingAddForm.valid) {
    } else {
      markAllFormFieldsAsTouched(this.savingAddForm)
    }
  }
}
