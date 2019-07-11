import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { PostsComponent } from "./posts/posts.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    PostsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "followers/:id/:username",
        component: GithubProfileComponent
      },
      {
        path: "followers",
        component: GithubFollowersComponent
      },
      {
        path: "posts",
        component: PostsComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
