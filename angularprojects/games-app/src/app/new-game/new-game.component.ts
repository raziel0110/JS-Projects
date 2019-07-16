import { Component, OnInit } from "@angular/core";
import { GamesService } from "../games.service";
import { Game } from "../models/game";

@Component({
  selector: "app-new-game",
  templateUrl: "./new-game.component.html",
  styleUrls: ["./new-game.component.css"]
})
export class NewGameComponent implements OnInit {
  games: Game[] = [];
  constructor(private game: GamesService) {}

  ngOnInit() {
    this.game.getAllGames().subscribe(data => (this.games = data));
  }

  onAdd(title: string, desc: string, imgUrl: string) {
    const newGame: any = {
      title: title,
      imageUrl: imgUrl,
      description: desc
    };

    this.game.addGame(newGame).subscribe(g => this.games.push(g));
    console.log(this.games);
  }
}
