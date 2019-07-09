import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  accounts = [
    { name: "Master Acount", status: "active" },
    { name: "Testacount", status: "inactive" },
    { name: "Hidden Acoount", status: "unknow" }
  ];

  onAccountAdded(newAcount: { name: string; status: string }) {
    this.accounts.push(newAcount);
  }
  onStatusChanged(updateStatus: { id: number; newStatus: string }) {
    this.accounts[updateStatus.id].status = updateStatus.newStatus;
    console.log(this.accounts);
  }
}
