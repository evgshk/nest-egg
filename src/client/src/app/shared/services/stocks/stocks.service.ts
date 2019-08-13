import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseHttpService } from '../base-http.service';
import { Observable } from 'rxjs';
import { RealtimePrice } from '@shared/models/stocks-api/realtime-price.model';

const apiUrl = 'https://financialmodelingprep.com/';

@Injectable()
export class StocksService extends BaseHttpService {

    constructor(http: HttpClient) {
        super(http, apiUrl);
    }

    getHistoricalPrice(label: string, from: Date, to: Date): Observable<any> {
        return this.http.get<any>(
            `${this.apiUrl}api/v3/historical-price-full/${label}?from=${from.toISOString()}&to=${to.toISOString()}`);
    }

    getRealtimePrice(label: string): Observable<RealtimePrice> {
        return this.http.get<RealtimePrice>(
            `${this.apiUrl}api/v3/stock/real-time-price/${label}`);
    }
}
