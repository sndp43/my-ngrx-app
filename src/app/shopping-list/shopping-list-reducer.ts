import { Ingredient } from "../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.action"

const InitialState = {

  ingredients: [
    new Ingredient("Apple",5),
    new Ingredient("Tomatos",10)
  ]

}

export function shoppingListReducer(
  state = InitialState,
  action:ShoppingListActions.AddIngredient){

  switch(action.type)
  {
        case "ADD_INGREDIENT":
          return {
                    ...state,
                    Ingredients:[ ...state.ingredients ,action.payload]
                };
          break;
        default:
          return {
                    ...state,
                    Ingredients:[ ...state.ingredients ,action.payload]
                };

  }

}
