import { Action } from '@ngrx/store';
import {Recipe} from '../recipe.model';

export const SET_RECIPES: string = 'SET_RECIPES';
export const ADD_RECIPE: string = 'ADD_RECIPE';
export const ADD_RECIPE_SUCCESS: string = 'ADD_RECIPE_SUCCESS';
export const UPDATE_RECIPE: string = 'UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCESS: string = 'UPDATE_RECIPE_SUCCESS';
export const DELETE_RECIPE: string = 'DELETE_RECIPE';
export const DELETE_RECIPE_SUCCESS: string = 'DELETE_RECIPE_SUCCESS';
export const FETCH_RECIPES: string = 'FETCH_RECIPES';

export class SetRecipes implements Action {
  readonly type: string = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}

export class AddRecipe implements Action {
  readonly type: string = ADD_RECIPE;

  constructor(public payload: Recipe) {}
}

export class AddRecipeSuccess implements Action {
  readonly type: string = ADD_RECIPE_SUCCESS;

  constructor(public payload: Recipe) {}
}

export class UpdateRecipe implements Action {
  readonly type: string = UPDATE_RECIPE;

  constructor(public payload: Recipe) {}
}

export class UpdateRecipeSuccess implements Action {
  readonly type: string = UPDATE_RECIPE_SUCCESS;

  constructor(public payload: Recipe) {}
}

export class DeleteRecipe implements Action {
  readonly type: string = DELETE_RECIPE;

  constructor(public payload: string) {}
}

export class DeleteRecipeSuccess implements Action {
  readonly type: string = DELETE_RECIPE_SUCCESS;

  constructor(public payload: string) {}
}


export class FetchRecipes implements Action {
 readonly type = FETCH_RECIPES;
}

export type RecipesActions =  SetRecipes |
                              AddRecipe |
                              UpdateRecipe |
                              DeleteRecipe |
                              FetchRecipes |
                              AddRecipeSuccess |
                              UpdateRecipeSuccess |
                              DeleteRecipeSuccess
