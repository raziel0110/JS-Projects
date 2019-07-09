import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor() {}

  ngOnInit() {}

  onSetTo(status: string) {
    const newStatus = { id: this.id, newStatus: status };
    this.statusChanged.emit(newStatus);
    // console.log("The status has changed,current status is now", status);
    console.log(newStatus);
  }
}
