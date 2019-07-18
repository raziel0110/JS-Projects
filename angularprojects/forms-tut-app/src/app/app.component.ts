import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f", { static: false }) singupForm: NgForm;
  defaultQuestion: string = "no question";
  answer: string = "";
  genders = ["male", "female"];

  user: {} = {};
  onSubmit(ngForm) {
    this.user = ngForm.value;
    console.log(this.user);
    ngForm.reset();
  }

  suggestUsername() {
    const suggestName = "Default User";

    //face override la toate proprietatile
    // this.singupForm.setValue({
    //   userData: {
    //     username: suggestName,
    //     email: "",
    //     secret: "pet",
    //     questionAnswer: "",
    //     gender: ""
    //   }
    // });

    //inlocuieste doar o singura proprietate

    this.singupForm.form.patchValue({
      userData: {
        username: suggestName
      }
    });
  }

  // onSubmit() {
  //   console.log(this.singupForm);
  // }
}
