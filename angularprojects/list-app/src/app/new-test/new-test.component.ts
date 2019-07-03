import { Component } from "@angular/core";

@Component({
  selector: "app-new-test",
  templateUrl: "./new-test.component.html",
  styleUrls: ["./new-test.component.css"]
})
export class NewTestComponent {
  title: string;
  todos = [];

  constructor() {}
  addToList(name) {
    if (name !== "" || name !== undefined) {
      this.todos.push(name);
    }
    this.title = "";
    console.log(this);
  }

  removeTodo(name) {
    const index = this.todos.findIndex(todo => todo === name);
    this.todos.splice(index, 1);
  }
}
