import { Component, OnInit } from "@angular/core";

@Component({
  selector: "newdate",
  templateUrl: "./newdate.component.html",
  styleUrls: ["./newdate.component.css"]
})
export class NewdateComponent implements OnInit {
  today = new Date();
  toggle = true;
  constructor() {}

  get format() {
    return this.toggle ? "shortDate" : "fullDate";
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
  ngOnInit() {}
}
