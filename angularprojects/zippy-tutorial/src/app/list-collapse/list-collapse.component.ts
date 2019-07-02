import { Component, Input } from "@angular/core";

@Component({
  selector: "list-collapse",
  templateUrl: "./list-collapse.component.html",
  styleUrls: ["./list-collapse.component.css"]
})
export class ListCollapseComponent {
  @Input("title") title: boolean;
  isExpanded: boolean;
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
