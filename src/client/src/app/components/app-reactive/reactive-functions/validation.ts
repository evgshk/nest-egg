import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

/**
 * Method return boolean value depends on input control requirement
 */
export function hasRequiredValidator(abstractControl: AbstractControl): boolean {
  const validator = abstractControl && abstractControl.validator ? abstractControl.validator({} as AbstractControl) : null;
  return !!validator && validator.required;
}

/**
 * Method validates if all control of the input form group are valid
 * If not, it marks them touched to trigger required validation procedures
 */
export function markAllFormFieldsAsTouched(formGroup: FormGroup | FormArray) {
  let isFirstInvalidControl = false;
  Object.keys(formGroup.controls).forEach(
    (field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
        if (!isFirstInvalidControl) {
          isFirstInvalidControl = control.invalid;
          if (isFirstInvalidControl && document.getElementById(field)) {
            window.scrollTo({
              top: getVerticalCoordinate(document.getElementById(field)),
              behavior: 'smooth'
            });
          }
        }
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        markAllFormFieldsAsTouched(control);
      }
    });
}

/**
 * Method return vertical coordinates of the input document element
 */
export function getVerticalCoordinate(el) {
  let _y = 0;
  const fieldHeight = 100;
  while (el && !isNaN(el.offsetTop)) {
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return _y > fieldHeight ? _y - fieldHeight : _y;
}
