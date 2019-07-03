import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";

@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  lastId: number = 0;
  todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);
    return this;
  }
}
