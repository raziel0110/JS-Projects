import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayListComponent } from "./display-list/display-list.component";
import { InputDataComponent } from "./input-data/input-data.component";
import { GameControlComponent } from "./game-control/game-control.component";
import { OddComponent } from "./odd/odd.component";
import { EvenComponent } from "./even/even.component";
import { BasicHightlightDirective } from "./basic-hightlight/basic-hightlight-directive";
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayListComponent,
    InputDataComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHightlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
