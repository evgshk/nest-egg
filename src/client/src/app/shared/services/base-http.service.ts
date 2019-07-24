import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable()
export abstract class BaseHttpService {

  protected apiUrl = environment.apiUrl;

  protected constructor(
    public http: HttpClient,
    apiUrl: string = ''
  ) {
    if (apiUrl) {
      this.apiUrl = apiUrl;
    }
  }
}
