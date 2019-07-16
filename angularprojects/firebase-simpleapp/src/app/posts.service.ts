import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  newPost(postData: Post): Observable<Post> {
    return this.http.post<Post>(
      "https://ng-simple-app.firebaseio.com/posts.json",
      postData
    );
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(
      "https://ng-simple-app.firebaseio.com/posts.json"
    );
  }

  deletePost(): Observable<Post> {
    return this.http.delete<Post>(
      "https://ng-simple-app.firebaseio.com/posts.json"
    );
  }
}
