import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  message: string = "secret message ";
  receiveMsg: string = "";
  count: number = 0;
  title = "Counter";

  increment($event) {
    this.count = $event;
  }

  decrement($event) {
    this.count = $event;
  }
}
