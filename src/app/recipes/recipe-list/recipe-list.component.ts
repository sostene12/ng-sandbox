import { Component,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://realfood.tesco.com/media/images/1400x919-HuntersChicken-1cddb648-ead8-4325-8e60-f80d1ca4ede3-0-1400x919.jpg'),
    new Recipe('Another test recipe', 'this is simply another  test', 'https://realfood.tesco.com/media/images/1400x919-HuntersChicken-1cddb648-ead8-4325-8e60-f80d1ca4ede3-0-1400x919.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
