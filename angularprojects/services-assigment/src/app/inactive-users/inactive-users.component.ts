import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"]
})
export class InactiveUsersComponent implements OnInit {
  @Input() users;

  //@Output() setUserToActive = new EventEmitter<number>();
  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  setToActive(id: number) {
    // this.setUserToActive.emit(id);
    this.usersService.setToActive(id);
  }
}
