import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  @Input() master;
  @Input() hero: Hero;
  constructor() {}

  ngOnInit() {}
}
