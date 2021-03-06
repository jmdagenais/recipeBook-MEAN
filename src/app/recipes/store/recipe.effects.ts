import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect} from '@ngrx/effects';
import {Store} from '@ngrx/store';

import {Recipe} from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducers';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class RecipeEffects {

  @Effect()
  addRecipe = this.actions$
    .ofType(RecipeActions.ADD_RECIPE)
    .switchMap((action: RecipeActions.AddRecipe) => {
      // delete the _id property because if it's set to null when sendint to the API the API will send it back as null
      delete(action.payload._id);
      return this.httpClient.post<Recipe>('/api/recipes', action.payload);
    })
    .map((recipe: Recipe) => {
      if(!recipe['ingredients']){
        recipe.ingredients = [];
      }

      return {
        type: RecipeActions.ADD_RECIPE_SUCCESS,
        payload: recipe
      };
    });

  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('/api/recipes')

    })
    .map((recipes: Recipe[]) => {
      for(let recipe of recipes) {
        if(!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return {
        type: RecipeActions.SET_RECIPES,
        payload: recipes
      };
    });

  @Effect()
  updateRecipe = this.actions$
    .ofType(RecipeActions.UPDATE_RECIPE)
    .switchMap((action: RecipeActions.UpdateRecipe) => {
      return this.httpClient.put(`/api/recipes/${action.payload._id}`, action.payload);
    })
    .map((recipe: Recipe) => {
      if(!recipe['ingredients']){
        recipe.ingredients = [];
      }

      return {
        type: RecipeActions.UPDATE_RECIPE_SUCCESS,
        payload: recipe
      };
    });

  deletedId = null;
  @Effect()
  deleteRecipe = this.actions$
    .ofType(RecipeActions.DELETE_RECIPE)
    .switchMap((action: RecipeActions.DeleteRecipe) => {
      this.httpClient.delete(`/api/recipes/${action.payload}`);
      return action.payload;
    })
    .map((id) => {
      return {
        type: RecipeActions.DELETE_RECIPE_SUCCESS,
        payload: this.deletedId
      };
    });

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromRecipe.FeatureState>){}
}
