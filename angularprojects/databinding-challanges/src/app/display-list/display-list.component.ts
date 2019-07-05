import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-display-list",
  templateUrl: "./display-list.component.html",
  styleUrls: ["./display-list.component.css"]
})
export class DisplayListComponent implements OnInit {
  @Input("framework") framework;

  @Output() onRemove = new EventEmitter<{ type: string; name: string }>();
  constructor() {}

  ngOnInit() {}

  onRemoveElement() {
    this.onRemove.emit({
      type: this.framework.type,
      name: this.framework.name
    });
  }
}
