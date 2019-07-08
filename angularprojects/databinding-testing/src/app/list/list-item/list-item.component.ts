import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../../model/todo";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  @Input() todo;
  @Output() todoChange = new EventEmitter<Todo>();
  @Output() todoDel = new EventEmitter<Todo>();
  constructor() {}

  removeItem(todo: Todo) {
    this.todoDel.emit(todo);
  }

  toggleSelect() {
    this.todo.isSelected = true;
  }

  update(todo: string) {
    const updatedItem = {
      id: this.todo.id,
      name: todo,
      isSelected: false
    };
    this.todoChange.emit(updatedItem);
    this.todo.isSelected = false;
    console.log(updatedItem);
  }
  ngOnInit() {}
}
