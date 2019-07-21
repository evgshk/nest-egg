import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Saving, SavingTotals, ExchangeRate } from '@shared/models';
import { SavingService, ExchangeRateService, CurrencyService } from '@shared/services';

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
    private savingService: SavingService,
    private exchangeRateService: ExchangeRateService,
    private currencyService: CurrencyService
  ) {
  }

  ngOnInit() {
    this.getSavings();
  }

  getSavings(): void {
    this.savingService.getItems()
      .subscribe((result: Saving[]) => this.savings = result);
  }

  loadExchangeRatesForToday(): void {
    this.isDetailedViewEnabled = !this.isDetailedViewEnabled;

    if (this.isDetailedViewEnabled && !this.exchangeRate.value) {
      const date = new Date();
      date.setHours(0, 0, 0, 0);

      this.exchangeRateService.getItemByDate(date)
        .subscribe(
          (result: ExchangeRate[]) => {
            this.exchangeRate = result[0];
            this.savings.forEach(x =>
              x.exchangeRateToday = x.exchangeRate !== 1 ? this.exchangeRate.value : 1);
          });
    }
  }
}
