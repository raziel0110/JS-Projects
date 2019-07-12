import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/todo";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }

  deleteTodo(todo: Todo) {
    //Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo));
    console.log(this.todos);
  }
}
