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
    const payload = {
      title: "Call of Duty®: WWII Returned",
      releaseDate: 1333929600,
      genre: "First Person Shooter",
      publisher: "Activision",
      imageUrl:
        "https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr 17?$TwoColumn_Image$"
    };

    this.game.addGame(newGame).subscribe(g => this.games.push(g));
    console.log(this.games);
  }
}
