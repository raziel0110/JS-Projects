import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactive-exercise",
  templateUrl: "./reactive-exercise.component.html",
  styleUrls: ["./reactive-exercise.component.css"]
})
export class ReactiveExerciseComponent implements OnInit {
  signupForm: FormGroup;
  status = ["Stable", "Critical", "Finished"];
  names = ["Test", "Default"];
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required],
        this.checkNamess.bind(this)
      ),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.checkEmail
      ),
      status: new FormControl("Stable")
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  checkNames(control: FormControl): { [s: string]: boolean } {
    if (this.names.indexOf(control.value) !== -1) {
      return { isUsed: true };
    }

    return null;
  }

  checkEmail(control: FormControl): Promise<any> | Observable<any> {
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

  checkNamess(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.names.indexOf(control.value) !== -1) {
          resolve({ isUsed: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
