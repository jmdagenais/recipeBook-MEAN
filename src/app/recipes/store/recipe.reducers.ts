import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import {AddRecipe, DeleteRecipe, SetRecipes, UpdateRecipe} from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}

export interface State {
  recipes: Recipe[]
}

const initialState: State = {
  recipes: [
    new Recipe('Steak frites',
      'A delicious steak with french fries',
      'https://www.bistrolentracte.com/medias/img/articles/steak-frites.jpg',
      [
        new Ingredient('steak', 1),
        new Ingredient('fries', 20)
      ]),
    new Recipe('Chocolate pie',
      'Yummy!',
      'http://tastykitchen.com/wp-content/uploads/2012/05/Tasty-Kitchen-Blog-Easy-Chocolate-Pie-10.jpg',
      [
        new Ingredient('pie crust', 1),
        new Ingredient('chocolate mousse', 1)
      ]
    )
  ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipesActions) {
  switch(action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...(<SetRecipes>action).payload]
      };
    case RecipeActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, (<AddRecipe>action).payload]
      };
    case RecipeActions.UPDATE_RECIPE:
      const recipe: Recipe = state.recipes[(<UpdateRecipe>action).payload.index];
      const updatedRecipe: Recipe = {...recipe, ...(<UpdateRecipe>action).payload.updatedRecipe};
      const updatedRecipes: Recipe[] = [...state.recipes];
      updatedRecipes[(<UpdateRecipe>action).payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: updatedRecipes
      };
    case RecipeActions.DELETE_RECIPE:
      const recipes: Recipe[] = [...state.recipes];
      recipes.splice((<DeleteRecipe>action).payload, 1);
      return {
        ...state,
        recipes: recipes
      };
    default:
      return state;
  }
}
