import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../models/recipe";
import { RecipeService } from "../recipes/recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
  onSelected() {
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
    console.log(this.recipe);
  }
}
