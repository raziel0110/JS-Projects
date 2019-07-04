import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  isVisible: boolean = true;
  increment: number = 0;
  array: number[] = [];
  constructor() {}

  onClick(): void {
    this.isVisible = !this.isVisible;
    this.array.push(this.increment++);
    console.warn(this.array);
  }
  ngOnInit() {}
}
