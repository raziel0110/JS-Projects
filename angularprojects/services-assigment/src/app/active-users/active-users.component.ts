import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"]
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  // @Output() userSetToInactive = new EventEmitter<number>();
  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersService.setToInactive(id);
  }

  ngOnInit() {}
}
