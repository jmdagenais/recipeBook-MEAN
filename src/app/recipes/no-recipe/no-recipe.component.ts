import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-recipe',
  template: '<h3>Please select a recipe</h3>',
  styleUrls: ['./no-recipe.component.css']
})
export class NoRecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
