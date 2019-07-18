import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-form-reactive",
  templateUrl: "./form-reactive.component.html",
  styleUrls: ["./form-reactive.component.css"]
})
export class FormReactiveComponent implements OnInit {
  genders: string[] = ["male", "female"];

  forbiddenUsernames = ["Chris", "Anna"];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        )
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  onAddHobby() {
    (<FormArray>this.signupForm.get("hobbies")).push(
      new FormControl(null, Validators.required)
    );
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "albangabriel@yahoo.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
