import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent implements OnInit {
  constructor() {}

  powers = ["realy smart", "super flexibile", "wheather changer"];
  model = new Hero(19, "Moonrider", this.powers[2], "Chuck Overstreet");
  ngOnInit() {}
}
