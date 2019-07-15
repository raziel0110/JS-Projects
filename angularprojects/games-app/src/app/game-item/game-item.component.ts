import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GamesService } from "../games.service";
import { Game } from "../models/game";

@Component({
  selector: "app-game-item",
  templateUrl: "./game-item.component.html",
  styleUrls: ["./game-item.component.css"]
})
export class GameItemComponent implements OnInit {
  @Input() game;
  @Output() onDeleteGame = new EventEmitter<Game>();

  constructor() {}

  ngOnInit() {}

  deleteGame(game): void {
    this.onDeleteGame.emit(game);
  }
}
