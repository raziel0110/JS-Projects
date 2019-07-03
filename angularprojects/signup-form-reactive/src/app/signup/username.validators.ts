import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0)
      return {
        cannotContainSpace: true
      };

    return null;
  }

  static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    if (control.value === "Maverick") {
      return {
        shouldBeUnique: true
      };
    }

    return null;
  }

  // async static validator

  static shouldBeUniqueOne(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "raziel") {
          resolve({ shouldBeUniqueOne: true });
        } else resolve(null);
      }, 2000);
    });
  }
}
