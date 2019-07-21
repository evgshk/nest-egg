import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  status = new BehaviorSubject<boolean>(false);

  isLoading(value: boolean) {
    this.status.next(value);
  }
}
