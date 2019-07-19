import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Saving, SavingTotals, ExchangeRate }         from '@shared/models';
import { FirebaseService }                            from '@shared/services';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  isDetailedViewEnabled = false;
  savings: Saving[] = [];
  savingTotalsByCurrency: SavingTotals[] = [];
  savingTotalsRub = 0;
  exchangeRate: ExchangeRate = new ExchangeRate();

  constructor(
    private firebaseService: FirebaseService
  ) {
  }

  ngOnInit() {
    this.getSavings();
  }

  getSavings() {
    this.firebaseService.getSavings()
      .subscribe(res => {
        this.savings = res;
        const totalsResultByCurrency = new Array<SavingTotals>();
        this.savings.reduce(function (result, value) {
          if (!result[value.currencyRef]) {
            result[value.currencyRef] = {currencyRef: value.currencyRef, currency: value.currency, value: 0, total: 0};
            totalsResultByCurrency.push(result[value.currencyRef]);
          }
          result[value.currencyRef].value += value.amount;
          result[value.currencyRef].total += value.amount * value.exchangeRate;
          return result;
        });

        let savingTotalsRub = 0;
        this.savings.forEach(x => savingTotalsRub += x.amount * x.exchangeRate);

        this.savingTotalsRub = savingTotalsRub;
        this.savingTotalsByCurrency = totalsResultByCurrency;
      });
  }

  loadExchangeRatesForToday() {
    this.isDetailedViewEnabled = !this.isDetailedViewEnabled;

    if (this.isDetailedViewEnabled && !this.exchangeRate.value) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);

      this.firebaseService.getExchangeRate(date)
        .subscribe(
          result => {
            this.exchangeRate = result[0];
            this.savings.forEach(x => x.exchangeRateToday = x.exchangeRate !== 1 ? this.exchangeRate.value : 1);
          });
    }
  }
}
