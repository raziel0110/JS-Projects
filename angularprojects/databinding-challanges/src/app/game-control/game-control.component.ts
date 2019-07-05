import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastIndex = 0;
  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastIndex + 1);
      this.lastIndex++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
