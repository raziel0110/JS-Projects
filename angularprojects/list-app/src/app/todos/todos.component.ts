import { Component, Input } from "@angular/core";
import { Todo } from "../../models/todo";
import { TodoDataService } from "../todo-data.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {}

  get todos() {
    console.log(this.todoDataService.getAllTodos());
    return this.todoDataService.getAllTodos();
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
}
