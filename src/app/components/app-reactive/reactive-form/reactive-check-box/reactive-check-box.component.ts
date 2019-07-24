import { Component }                    from '@angular/core';
import { includes }                     from 'lodash';
import { AppReactiveAbstractComponent } from '../app-reactive-abstract.component';

@Component({
  selector: 'app-reactive-check-box',
  templateUrl: './reactive-check-box.component.html'
})
export class ReactiveCheckBoxComponent extends AppReactiveAbstractComponent {
}
