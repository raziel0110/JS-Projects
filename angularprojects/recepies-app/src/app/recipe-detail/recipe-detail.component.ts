import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../models/recipe";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
}
