import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  oddNumber: number[] = [];
  evenNumber: number[] = [];
  // frameworks = [{ type: "javascript", name: "angular" }];

  // onAddItem(frameworkDate: { type: string; name: string }) {
  //   this.frameworks.push({
  //     type: frameworkDate.type,
  //     name: frameworkDate.name
  //   });
  // }

  // onRemoveItem(item) {
  //   const index = this.frameworks.findIndex(el => el.name === item.name);
  //   console.log(index);
  //   return this.frameworks.splice(index, 1);
  // }

  onIntervalFired(fireNumber: number) {
    if (fireNumber % 2 === 0) {
      this.evenNumber.push(fireNumber);
    } else {
      this.oddNumber.push(fireNumber);
    }
  }
}
