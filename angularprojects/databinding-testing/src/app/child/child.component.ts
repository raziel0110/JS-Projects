import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Output() messageToSend = new EventEmitter<string>();
  @Input() message;

  text: string = "Data binding";
  constructor() {}

  sendMessage() {
    this.messageToSend.emit(this.text);
  }

  ngOnInit() {}
}
