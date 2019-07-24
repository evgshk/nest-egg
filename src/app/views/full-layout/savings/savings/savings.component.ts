import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Saving, ExchangeRate }                       from '@shared/models';
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
  templateUrl: 'savings.component.html'
})
export class SavingsComponent extends SavingsAbstract implements OnInit {

  headersList = SAVINGS_TABLE['headers'];
  listOfInitialData: Saving[] = [];
  settingsList = Object.keys(SAVINGS_TABLE['headers'])
    .map(x => ({
      id: x,
      title: SAVINGS_TABLE['headers'][x]['label'],
      align: SAVINGS_TABLE['headers'][x]['align'] || 'left',
      width: SAVINGS_TABLE['headers'][x]['width'] || 'Auto',
      isDisabled: x === 'id',
      isShown: x === 'id' ? true : SAVINGS_TABLE['headers'][x]['isShown'] !== false,
    }));

  exchangeRate = new ExchangeRate();

  ngOnInit() {
    this.getSavings();
    this.getExchangeRatesForToday();
  }

  getSavings() {
    this.loadingService.isLoading(true);
    this.savingService.getItems()
      .subscribe(res => {
        this.listOfInitialData = res && res.length ? res.map(x => ({
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
        this.listOfInitialData.forEach(x => ({
          ...x,
          exchangeRateToday: x.exchangeRate !== 1 ? this.exchangeRate.value : 1,
          totalToday: x.amount * x.exchangeRateToday,
          diff: x.amount * x.exchangeRateToday - x.amount * x.exchangeRate
        }));
      });
  }
}
