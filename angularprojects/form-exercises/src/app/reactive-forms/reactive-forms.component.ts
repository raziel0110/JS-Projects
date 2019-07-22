import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from "@angular/forms";
//import { CustomValidatorsComponent } from "./custom-validators/custom-validators.component";
@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"]
})
export class ReactiveFormsComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        passwordConfirm: new FormControl(null, [Validators.required])
      },
      { validators: this.passwordConfirming }
    );
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  passwordConfirming: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get("password").value;
    const confirm = control.get("passwordConfirm").value;
    console.warn(control);
    if (password === confirm) alert("yeee");
    return password !== confirm ? { mismatch: true } : null;
  };
}
