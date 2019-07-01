import { Component } from "@angular/core";
import { FavoriteChangedEventArgs } from "./favorite/favorite.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //bind element
  heading: string = "Heading";
  body: string = "Body part";
  post = {
    title: "Title",
    isFavorite: true
  };

  tweet = {
    body: "...",
    likesCount: 10,
    isLiked: true
  };
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite change", eventArgs);
  }
}
