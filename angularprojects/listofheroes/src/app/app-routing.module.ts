import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DasboardComponent } from "./dasboard/dasboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DasboardComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "detail:id", component: HeroDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
