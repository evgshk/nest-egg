import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { includes }                                       from 'lodash';
import { AppReactiveAbstractComponent }                   from '../app-reactive-abstract.component';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html'
})
export class ReactiveInputComponent extends AppReactiveAbstractComponent implements OnInit {

  /**
   * maxLength is a number of input value maximum length
   */
  @Input() maxLength: number | null;

  /**
   * onInputDirective is an option for input control directive
   * default value is used in for-iteration to delete the directive for some fields
   */
  @Input() onInputDirective = 'deleteDirective';

  /**
   * pipeOption is a string value to choose pipe transformation on input value
   * default value is used not to transform input value
   */
  @Input() pipeOption = 'default';

  /**
   * icon is a prefix icon to input, which is placed inside of the beginning of input borders
   */
  @Input() icon: string;

  @Output() enterKey = new EventEmitter();

  inputType: string;

  ngOnInit() {
    this.inputType = this.fieldId ? (includes(this.fieldId.toLowerCase(), 'password') ? 'password' : 'test') : null;
  }
}
