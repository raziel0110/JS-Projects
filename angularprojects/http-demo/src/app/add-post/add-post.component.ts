import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  @Output() postEmit = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  onAddItem(title: HTMLInputElement, body: HTMLInputElement) {
    const post = {
      title: title,
      body: body
    };

    this.postEmit.emit(post);
  }
}
