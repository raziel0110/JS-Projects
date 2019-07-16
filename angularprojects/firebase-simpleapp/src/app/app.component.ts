import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedPosts: any[] = [];
  isLoading: boolean = false;
  error = null;
  constructor(private posts: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    this.posts.newPost(postData).subscribe();
  }

  onFetchPosts() {
    this.isLoading = true;
    this.posts
      .getAllPosts()
      .pipe(
        map(response => {
          const postsArray: Post[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              postsArray.push({ ...response[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe(
        posts => {
          this.isLoading = false;
          this.loadedPosts = posts;
        },
        error => {
          this.error = error.error.error;
        }
      );
  }

  onClearPosts() {
    this.posts.deletePost().subscribe();
  }
}
