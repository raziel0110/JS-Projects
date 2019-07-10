import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../models/recipe";
import { Ingredient } from "../models/ingredient";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "this just a test",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "A second test ",
      "this is just recipe testing content",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*",
      [new Ingredient("French Fries", 50)]
    )
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredinetsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
