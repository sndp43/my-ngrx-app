import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeServiceService {

  recipeChanged=new Subject<Recipe[]>();

  constructor(private shoppingListSer:ShoppingListService) { }

  recipes:Recipe[]=[];

  setRecipes(recipes){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice(); //slice will give the copy of og Recipes array
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListSer.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  updateRecipe(index:number,recipe:Recipe){
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  addRecipe(recipe:Recipe){
     this.recipes.push(recipe);
     this.recipeChanged.next(this.recipes.slice());
  }

  onDeleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }


}
