import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  FILLING_NEEDED_MESSAGE,
  MAX_LENGTH_SYMBOLS_MESSAGE, MAX_VALUE_MESSAGE,
  MIN_LENGTH_SYMBOLS_MESSAGE, MIN_VALUE_MESSAGE
}                                                    from '@components/app-reactive/reactive-lists/messages';
import { PATTERNS_LIST }                             from '../../../reactive-lists/patterns';

@Component({
  selector: 'app-validation-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent {

  /**
   * validationErrors is a reactive form errors
   * it's nonnull in case if the control is touched and invalid,
   * which is defined on the reactive base component side
   */
  @Input() validationErrors;

  errorMessage: string;

  getErrorMessage() {
    const errors = this.validationErrors;
    if (errors) {
      this.errorMessage = errors['required'] ? FILLING_NEEDED_MESSAGE
        : errors['minlength'] ? MIN_LENGTH_SYMBOLS_MESSAGE.replace('...', errors['minlength']['requiredLength'])
          : errors['maxlength'] ? MAX_LENGTH_SYMBOLS_MESSAGE.replace('...', errors['minlength']['requiredLength'])
            : errors['min'] ? MIN_VALUE_MESSAGE.replace('...', errors['min']['min'])
              : errors['max'] ? MAX_VALUE_MESSAGE.replace('...', errors['max']['max'])
                : errors['pattern'] ? this.getPatternMessage(errors['pattern']['requiredPattern'])
                  : errors['customError'] ? errors['customError']
                    : null;
    } else {
      this.errorMessage = null;
    }
    return this.errorMessage;
  }

  getPatternMessage(requiredPattern: string): string {
    return PATTERNS_LIST.find(x => x['PATTERN'] === requiredPattern)['MESSAGE'];
  }
}
