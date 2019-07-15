import { Component, OnInit } from "@angular/core";
import { GamesService } from "../games.service";
import { Game } from "../models/game";

@Component({
  selector: "app-games-list",
  templateUrl: "./games-list.component.html",
  styleUrls: ["./games-list.component.css"]
})
export class GamesListComponent implements OnInit {
  gamesList: Game[] = [];
  constructor(private games: GamesService) {}

  ngOnInit() {
    this.games.getAllGames().subscribe(data => (this.gamesList = data));
  }
  onDelItem(game: Game) {
    this.gamesList = this.gamesList.filter(g => g._id !== game._id);
    this.games.deleteGame(game).subscribe();
    console.log(this.gamesList);
  }
}
