import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Saving } from 'src/app/shared/models/saving.model';
import { SavingTotals } from 'src/app/shared/models/saving-totals.model';
import { ExchangeRate } from 'src/app/shared/models/exchange-rate.model';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public isDetailedViewEnabled = false;
  public savings: Saving[] = [];
  public savingTotalsByCurrency: SavingTotals[] = [];
  public savingTotalsRub = 0;
  public exchangeRate: ExchangeRate = new ExchangeRate();

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.loadSavings();
  }

  private loadSavings() {
    this.firebaseService.getSavings()
      .subscribe(
        res => {
          this.savings = res;

          const totalsResultByCurrency = new Array<SavingTotals>();

          this.savings.reduce(function (result, value) {
            if (!result[value.currencyRef]) {
              result[value.currencyRef] = { currencyRef: value.currencyRef, currency: value.currency, value: 0, total: 0 };
              totalsResultByCurrency.push(result[value.currencyRef]);
            }
            result[value.currencyRef].value += value.amount;
            result[value.currencyRef].total += value.amount * value.exchangeRate;
            return result;
          });

          let savingTotalsRub = 0;
          this.savings.forEach(x => {
            savingTotalsRub += x.amount * x.exchangeRate;
          });

          this.savingTotalsRub = savingTotalsRub;
          this.savingTotalsByCurrency = totalsResultByCurrency;
        });
  }

  public loadExchangeRatesForToday() {
    this.isDetailedViewEnabled = !this.isDetailedViewEnabled;

    if (this.isDetailedViewEnabled && !this.exchangeRate.value) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);

      this.firebaseService.getExchangeRate(date)
        .subscribe(
          result => {
            this.exchangeRate = result[0];
            this.savings.forEach(x =>
              x.exchangeRateToday = x.exchangeRate !== 1 ? this.exchangeRate.value : 1);
          });
    }
  }
}
