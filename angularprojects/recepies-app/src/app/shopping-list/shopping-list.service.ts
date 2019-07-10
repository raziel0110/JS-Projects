import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomato", 7)
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredinet(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
