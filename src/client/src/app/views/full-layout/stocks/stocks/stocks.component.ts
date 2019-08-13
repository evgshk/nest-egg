import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StocksAbstract } from './../stocks-abstract';
import { Observable, forkJoin } from 'rxjs';
import { Stock } from '@shared/models/stock.model';
import { RealtimePrice } from '@shared/models/stocks-api/realtime-price.model';

const STOCKS_TABLE = {
  headers: {
    label: { label: 'Label', type: 'text', isSortable: true },
    price: { label: 'Buy price', type: 'rounded-number', isSortable: true },
    amount: { label: 'Amount', type: 'rounded-number', isSortable: true },
    total: { label: 'Total', type: 'rounded-number', isSortable: true },
    diff: { label: 'Gain', type: 'diff', isSortable: true }
  }
};

@Component({
  selector: 'app-stocks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'stocks.component.html',
})
export class StocksComponent extends StocksAbstract implements OnInit {
  public stockList: Stock[] = [];
  public headers = STOCKS_TABLE['headers'];

  ngOnInit() {
    this.loadStocks();
  }

  private loadStocks() {
    this.loadingService.isLoading(true);
    this.stockService.getItems()
      .subscribe(res => {
        this.stockList = res;
        const labels = this.stockList.map(x => x.label);
        this.loadRealtimePrices(labels).subscribe(
          responses => responses.forEach(
            realtime => {
              const row = this.stockList.filter(x => x.label === realtime.symbol)[0];
              row.diff = realtime.price * row.amount - row.total;
            }
          ),
          (e) => console.error(e),
          () => {
            this.loadingService.isLoading(false);
            this.cdr.markForCheck();
          }
        );
      });
  }

  private loadRealtimePrices(labels: string[]): Observable<RealtimePrice[]> {
    const responses = new Array<Observable<RealtimePrice>>();

    labels.forEach(item => {
      const response = this.stocksService.getRealtimePrice(item);
      responses.push(response);
    });

    return forkJoin(...responses);
  }
}
