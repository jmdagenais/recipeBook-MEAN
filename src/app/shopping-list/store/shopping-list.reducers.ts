import * as ShoppingListActions from './shopping-list.actions';
import {Ingredient} from '../../shared/ingredient.model';
import {AddIngredient, AddIngredients} from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number
}

const initialState: State = {
  ingredients: [
    new Ingredient('Chicken legs', 4),
    new Ingredient('Tomatoes', 3)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type){
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, (<AddIngredient>action).payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...(<AddIngredients>action).payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient: Ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient: Ingredient = Object.assign({}, ingredient, (<ShoppingListActions.UpdateIngredient>action).payload.ingredient);
      const ingredients: Ingredient[] = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updatedIngredient;
      return  {
        ...state,
        ingredients: ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      let oldIngredients: Ingredient[] = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredient: Ingredient = {...state.ingredients[(<ShoppingListActions.StartEdit>action).payload]};
      return {
        ...state,
        editedIngredient: editedIngredient,
        editedIngredientIndex: (<ShoppingListActions.StartEdit>action).payload
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
