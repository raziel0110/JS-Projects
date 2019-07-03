import { AbstractControl, ValidationErrors } from "@angular/forms";

export class OldPasswordValidators {
  static uniquePassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value.toString() !== "1234") {
          resolve({ uniquePassword: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
