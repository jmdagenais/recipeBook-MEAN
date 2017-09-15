import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

import * as fromRecipe from './store/recipe.reducers';
import * as RecipeActions from './store/recipe.actions';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

}
