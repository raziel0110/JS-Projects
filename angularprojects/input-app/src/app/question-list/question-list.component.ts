import { Component } from "@angular/core";
import { Hero } from "../hero";
import { HEROES } from "../mock-hero";

@Component({
  selector: "app-question-list",
  templateUrl: "./question-list.component.html",
  styleUrls: ["./question-list.component.css"]
})
export class QuestionListComponent {
  heroes: Hero[] = HEROES;
  master: string = "Master";

  constructor() {}
}
