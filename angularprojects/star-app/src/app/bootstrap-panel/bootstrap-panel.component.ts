import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "bootstrap-panel",
  templateUrl: "./bootstrap-panel.component.html",
  styleUrls: ["./bootstrap-panel.component.css"]
})
export class BootstrapPanelComponent implements OnInit {
  @Input() heading: string;
  @Input() body: string;
  constructor() {}

  ngOnInit() {}
}
