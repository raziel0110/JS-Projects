import { Component, OnInit } from "@angular/core";
import { Todo } from "../model/todo";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];
  currentId = 0;
  constructor() {}

  ngOnInit() {}

  addItem(todo: string) {
    const newTodo = new Todo(this.currentId, todo);
    this.todos.push(newTodo);
    this.currentId++;
  }

  updateItem($event) {
    const item = this.todos.find(el => el.id === $event.id);
    item.name = $event.name;
  }

  deleteItem(todo: Todo) {
    const index = this.todos.findIndex(el => el.name === todo.name);
    this.todos.splice(index, 1);
  }
}
