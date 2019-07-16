import { Component, OnInit } from "@angular/core";
import { Game } from "../models/game";
import { ActivatedRoute } from "@angular/router";
import { GamesService } from "../games.service";

@Component({
  selector: "app-game-detail",
  templateUrl: "./game-detail.component.html",
  styleUrls: ["./game-detail.component.css"]
})
export class GameDetailComponent implements OnInit {
  gameDetail: Game;
  id: string;
  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => (this.id = params.get("id")));
    this.gameService.getGame(this.id).subscribe(game => {
      this.gameDetail = game;
    });
  }
}
