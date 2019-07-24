import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StocksAbstract } from './../stocks-abstract';
import { Observable, forkJoin } from 'rxjs';

const STOCKS_TABLE = {
  headers: {
    label: {label: 'Label', type: 'text', isSortable: true},
    price: {label: 'Price', type: 'rounded-number', isSortable: true},
    amount: {label: 'Amount', type: 'rounded-number', isSortable: true},
    total: {label: 'Total', type: 'rounded-number', isSortable: true},
    diff: {label: 'Diff', type: 'rounded-number', isSortable: true}
  }
};

@Component({
  selector: 'app-stocks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'stocks.component.html',
})
export class StocksComponent extends StocksAbstract implements OnInit {

  

  public labels = ['AAPL', 'NEE', 'J1PM', 'MSFT', 'MA', 'FB', 'DIS'];
  public result: any[] = [];
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  ngOnInit() {
    // TODO - implemet data load
    // this.loadLabelsHistory().subscribe(
    //   responses => responses.forEach(
    //     item => this.result.push(item))
    // );
  }

  private loadLabelsHistory(): Observable<any[]> {
    const responses = new Array<Observable<any>>();
    const now = new Date();
    const from = new Date(new Date().setDate(now.getDate() - 7));
    const to = now;

    this.labels.forEach(label => {
      const response = this.stocksService.getHistoricalPrice(label, from, to);
      responses.push(response);
    });

    return forkJoin(...responses);
  }
}
