import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OldPasswordValidators } from "./oldpassword.validators";

@Component({
  selector: "change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldpassword: new FormControl(
      "",
      [Validators.required, Validators.minLength(3)],
      OldPasswordValidators.uniquePassword
    ),
    newpassword: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ]),
    confirmpassword: new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get oldpassword() {
    return this.form.get("oldpassword");
  }

  get newpassword() {
    return this.form.get("newpassword");
  }
  get confirmpassword() {
    return this.form.get("confirmpassword");
  }
}
