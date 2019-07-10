import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  accounts = [
    { name: "Master Acount", status: "active" },
    { name: "Testacount", status: "inactive" },
    { name: "Hidden Acoount", status: "unknow" }
  ];

  statusUpdated = new EventEmitter<string>();
  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
