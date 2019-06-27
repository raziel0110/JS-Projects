import { Component, OnInit } from "@angular/core";

@Component({
  selector: "dates",
  templateUrl: "./dates.component.html",
  styleUrls: ["./dates.component.css"]
})
export class DatesComponent implements OnInit {
  birthday = new Date(1985, 2, 27);
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
