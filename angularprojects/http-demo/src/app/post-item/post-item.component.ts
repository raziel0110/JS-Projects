import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../model/post";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"]
})
export class PostItemComponent implements OnInit {
  @Input() postItem;
  @Output() deletePostEmit = new EventEmitter<Post>();
  constructor() {}

  ngOnInit() {}

  deletePost(post: Post) {
    this.deletePostEmit.emit(post);
  }
}
