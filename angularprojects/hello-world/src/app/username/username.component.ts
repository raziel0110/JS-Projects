import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
  styleUrls: ["./username.component.css"]
})
export class UsernameComponent implements OnInit {
  username: string = "";
  isDisabled: boolean = true;

  constructor() {}

  onChange() {
    if (this.username !== "") {
      this.isDisabled = false;
    }
    this.isDisabled = true;
  }
  ngOnInit() {}

  onClick() {
    this.username = "";
  }
}
