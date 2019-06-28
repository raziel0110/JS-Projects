import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HeroService } from "./hero.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from './messages/messages.component';
import { DasboardComponent } from './dasboard/dasboard.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, DasboardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
