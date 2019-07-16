import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GamesService } from "../games.service";
import { Game } from "../models/game";
import { Router } from "@angular/router";

@Component({
  selector: "app-game-item",
  templateUrl: "./game-item.component.html",
  styleUrls: ["./game-item.component.css"]
})
export class GameItemComponent implements OnInit {
  @Input() game;
  @Output() onDeleteGame = new EventEmitter<Game>();

  constructor(private router: Router) {}

  ngOnInit() {}

  deleteGame(game): void {
    this.onDeleteGame.emit(game);
  }

  onClick(id: string) {
    this.router.navigate(["/games", id]);
  }
}
