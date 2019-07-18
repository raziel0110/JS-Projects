import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-reactive-exercise",
  templateUrl: "./reactive-exercise.component.html",
  styleUrls: ["./reactive-exercise.component.css"]
})
export class ReactiveExerciseComponent implements OnInit {
  signupForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      projectName: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
