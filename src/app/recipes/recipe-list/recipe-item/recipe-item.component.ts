import { Component,Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe:Recipe = new Recipe('','','',[]);

  constructor(private recipeService: RecipeService){}

  isEmpty(recipe: Recipe): boolean {
    return recipe.name.trim() !== '' && recipe.decription.trim() !== '' && recipe.imagePath.trim() !== '';
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
