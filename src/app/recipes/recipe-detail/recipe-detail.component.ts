import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
import {Recipe} from '../recipe.model';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipeState: Observable<fromRecipe.State>;
  // test
  recipe: Recipe = new Recipe();
  id: string;

  // subscriptions to clear
  recipeSubscription: Subscription;
  httpSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRecipe.FeatureState>,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        this.recipeState = this.store.select('recipes');
        this.recipeSubscription = this.recipeState
          .subscribe((state: fromRecipe.State) => {
            this.recipe = state.recipes.find((recipe: Recipe) => {
              return recipe._id === this.id;
            });
          })
      })
  }

  onAddToShoppingList() {
    this.store.select('recipes')
      .take(1)
      .subscribe((recipeState: fromRecipe.State) => {
        // TODO: manage without the index
        // this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
      });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.httpSubscription = this.httpClient.delete(`api/recipes/${this.id}`)
      .subscribe(() => {
        this.store.dispatch(new RecipeActions.DeleteRecipeSuccess(this.id));
        this.router.navigate(['/recipes']);
      });
  }

  ngOnDestroy() {
    this.recipeSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }
}
