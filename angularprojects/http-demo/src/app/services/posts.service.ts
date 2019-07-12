import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../model/post";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  deletePost(post: Post): Observable<Post> {
    const deletePost = `${this.apiUrl}/${post.id}}`;
    return this.http.delete<Post>(deletePost);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}
