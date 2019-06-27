import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { TitleCasePipe } from "./title-case.pipe";

@NgModule({
  declarations: [AppComponent, FavoriteComponent, TitleCasePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
