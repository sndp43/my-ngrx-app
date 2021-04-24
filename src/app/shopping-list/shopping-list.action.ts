import { Ingredient } from "../shared/ingredient.model";


export const ADD_INGREDIENT = "ADD_INGREDIENT";

//Addingredient action
export class AddIngredient{

  readonly type:string = ADD_INGREDIENT;
  payload :Ingredient;

}
