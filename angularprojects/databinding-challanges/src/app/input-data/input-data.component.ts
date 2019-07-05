import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-input-data",
  templateUrl: "./input-data.component.html",
  styleUrls: ["./input-data.component.css"]
})
export class InputDataComponent implements OnInit {
  @Output() onAddItem = new EventEmitter<{ type: string; name: string }>();

  frameworkName: string = "";
  selectType: string = "";
  types: string[] = ["Javascript", "Java", ".NET"];
  constructor() {}

  ngOnInit() {}

  addItem() {
    this.onAddItem.emit({
      type: this.selectType,
      name: this.frameworkName
    });
  }
}
