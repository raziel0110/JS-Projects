import { Component } from "@angular/core";

@Component({
  selector: "app-input-form",
  templateUrl: "./input-form.component.html",
  styleUrls: ["./input-form.component.css"]
})
export class InputFormComponent {
  heroes = ["Windstorm", "Magneto", "Tornado"];
  constructor() {}

  addHero(hero) {
    if (hero) {
      this.heroes.push(hero);
    }
  }
}
