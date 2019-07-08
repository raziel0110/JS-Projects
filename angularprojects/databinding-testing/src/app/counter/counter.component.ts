import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  @Input("count") count;
  @Output() countChanger = new EventEmitter<number>();

  constructor() {}

  increment() {
    if (this.count < 10) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.countChanger.emit(this.count);
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    } else {
      this.count = 0;
    }

    this.countChanger.emit(this.count);
  }

  ngOnInit() {}
}
