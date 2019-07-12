import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostItemComponent } from "./post-item/post-item.component";
import { PostListComponent } from "./post-list/post-list.component";

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostItemComponent,
    PostListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
