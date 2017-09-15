import {Ingredient} from '../shared/ingredient.model';
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  readonly _id: string;

  constructor() {
    // this.name = name;
    // this.description = description;
    // this.imagePath = imagePath;
    // this.ingredients = ingredients;
  }
}
