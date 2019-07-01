import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { FavoriteComponent } from "./favorite/favorite.component";
// import { TitleCasePipe } from "./title-case.pipe";
import { BootstrapPanelComponent } from "./bootstrap-panel/bootstrap-panel.component";
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    // FavoriteComponent,
    // TitleCasePipe,
    BootstrapPanelComponent,
    LikeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
