import { FormControl, FormGroup, Validators } from '@angular/forms';

export function getReactiveForm(fieldsList): FormGroup {
  const formGroup = new FormGroup({});
  fieldsList.forEach(x => {
    const value = x['value'];
    formGroup.addControl(x['fieldId'], new FormControl({value, disabled: x['isDisabled']}));
    let validatorsList;
    validatorsList = x.isRequired ? [Validators.required] : [];
    validatorsList = x.pattern ? [...validatorsList, Validators.pattern(x.pattern)] : [...validatorsList];
    validatorsList = x.minLength ? [...validatorsList, Validators.minLength(x.minLength)] : [...validatorsList];
    formGroup.get(x['fieldId']).setValidators(validatorsList);
  });
  return formGroup;
}
