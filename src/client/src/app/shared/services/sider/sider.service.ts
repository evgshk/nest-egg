import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiderService {

  status = new BehaviorSubject<boolean>(false);

  isCollapsed(value: boolean) {
    this.status.next(value);
  }
}
