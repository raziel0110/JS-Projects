import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven",
  templateUrl: "./template-driven.component.html",
  styleUrls: ["./template-driven.component.css"]
})
export class TemplateDrivenComponent implements OnInit {
  user = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  constructor() {}

  ngOnInit() {}

  onSubmit(ngForm) {
    console.log(ngForm);
    console.log(this.user.password);
  }
}
