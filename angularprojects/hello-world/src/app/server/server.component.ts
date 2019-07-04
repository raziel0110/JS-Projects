import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: string = "offline";
  serverId: number = Math.floor(Math.random() * 10);
  constructor() {
    this.server = Math.random() > 0.5 ? "online" : "offline";
  }

  getColor() {
    return this.server === "online" ? "green" : "red";
  }

  ngOnInit() {}
}
