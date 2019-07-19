import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
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
      this.passwordConfirming.bind(this)
    );
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  passwordConfirming(control: FormGroup) {
    return control.controls["password"].value ===
      control.controls["passwordConfirm"].value
      ? null
      : { mismatch: true };
  }
}
