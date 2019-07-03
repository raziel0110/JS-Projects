import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from "./username.validators";

@Component({
  selector: "signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("[A-Za-z ]*"),
          // UsernameValidators.cannotContainSpace,
          UsernameValidators.shouldBeUnique
        ],
        UsernameValidators.shouldBeUniqueOne
      ),
      password: new FormControl("", Validators.required)
    })
  });

  get username() {
    return this.form.get("account.username");
  }

  get password() {
    return this.form.get("account.password");
  }
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
