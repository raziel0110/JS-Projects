import { Directive, Input } from "@angular/core";
import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[appCustomValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true
    }
  ]
})
export class CustomValidatorDirective implements Validator {
  @Input() appCustomValidator: string;
  validate(control: AbstractControl): { [key: string]: boolean } {
    const controlCompare = control.parent.get(this.appCustomValidator);
    if (controlCompare && controlCompare.value !== control.value) {
      return { notEqual: true };
    }
    return null;
  }

  constructor() {}
}
