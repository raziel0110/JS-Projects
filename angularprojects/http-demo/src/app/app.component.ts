import { Component } from "@angular/core";
import { Post } from "./model/post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "http-demo";
  newPost: Post;

  addPost(post: Post) {
    this.newPost = post;
  }
}
