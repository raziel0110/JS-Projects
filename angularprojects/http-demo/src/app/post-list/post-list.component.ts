import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../model/post";
import { PostsService } from "../services/posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  @Input() newPost;
  posts: Post[] = [];
  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe(data => (this.posts = data));
    console.log(this.posts);
  }

  deleteItem(post: Post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
    this.postsService.deletePost(post).subscribe();
  }

  addNewPost(post: Post) {
    this.postsService.addPost(post).subscribe(p => this.posts.push(p));
    console.log(this.posts);
  }
}
