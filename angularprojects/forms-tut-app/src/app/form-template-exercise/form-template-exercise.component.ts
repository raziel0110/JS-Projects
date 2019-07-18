import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-template-exercise",
  templateUrl: "./form-template-exercise.component.html",
  styleUrls: ["./form-template-exercise.component.css"]
})
export class FormTemplateExerciseComponent implements OnInit {
  userInfo: {} = {};
  submited: boolean = false;
  userArr = [];
  constructor() {}

  ngOnInit() {}

  onSubmit(ngForm) {
    this.userInfo = ngForm.value;
    this.userArr = Object.keys(this.userInfo).map(key => {
      return [key, this.userInfo[key]];
    });
    this.submited = true;
  }
}
