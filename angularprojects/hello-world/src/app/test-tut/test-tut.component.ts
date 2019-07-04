import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-tut",
  templateUrl: "./test-tut.component.html",
  styleUrls: ["./test-tut.component.css"]
})
export class TestTutComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName: string = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  ngOnInit() {}
}
