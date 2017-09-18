import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import {AddRecipe, DeleteRecipe, DeleteRecipeSuccess, SetRecipes, UpdateRecipeSuccess} from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  recipes: State
}

export interface State {
  recipes: Recipe[]
}

const initialState: State = {
  recipes: []
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipesActions) {
  switch(action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...(<SetRecipes>action).payload]
      };
    case RecipeActions.ADD_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: [...state.recipes, (<AddRecipe>action).payload]
      };
    case RecipeActions.UPDATE_RECIPE_SUCCESS:
      const oldRecipe: Recipe = state.recipes.find((recipe: Recipe) => {
        return recipe._id === (<UpdateRecipeSuccess>action).payload._id;
      });

      const updatedRecipe: Recipe = {...oldRecipe, ...(<UpdateRecipeSuccess>action).payload};
      const updatedRecipes: Recipe[] = [...state.recipes];
      updatedRecipes.forEach((recipe: Recipe, index: number) => {
        if (recipe._id === updatedRecipe._id) {
          updatedRecipes[index] = updatedRecipe;
          return;
        }
      });
      return {
        ...state,
        recipes: updatedRecipes
      };
    case RecipeActions.DELETE_RECIPE_SUCCESS:
      let recipes: Recipe[] = [...state.recipes];

      recipes = recipes.filter((recipe: Recipe) => {
        return recipe._id !== (<DeleteRecipeSuccess>action).payload
      });

      return {
        ...state,
        recipes: recipes
      };
    default:
      return state;
  }
}
