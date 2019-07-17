import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class BaseService {

    protected baseUri: string = environment.baseUrl;
    protected http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }
}
