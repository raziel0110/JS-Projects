import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GamesListComponent } from "./games-list/games-list.component";
import { GamesHeaderComponent } from "./games-header/games-header.component";
import { GameItemComponent } from "./game-item/game-item.component";
import { CcColorHoverDirective } from "./cc-color-hover.directive";
import { NewGameComponent } from "./new-game/new-game.component";

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesHeaderComponent,
    GameItemComponent,
    CcColorHoverDirective,
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: GamesListComponent },
      { path: "newgame", component: NewGameComponent }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
