import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe:Recipe = new Recipe('','','');
  @Output() recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>()

  isEmpty(recipe: Recipe): boolean {
    return recipe.name.trim() !== '' && recipe.decription.trim() !== '' && recipe.imagePath.trim() !== '';
  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
