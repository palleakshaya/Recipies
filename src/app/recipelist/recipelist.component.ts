import { Component } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { AllrecipesComponent } from '../allrecipes/allrecipes.component';

@Component({
  selector: 'app-recipelist',
  standalone: true,
  imports: [AllrecipesComponent],
  templateUrl: './recipelist.component.html',
  styleUrl: './recipelist.component.scss',
})
export class RecipelistComponent {
  recipe_list: any;

  constructor(public RecipeServiceService: RecipeServiceService) {
    this.recipe_list = this.RecipeServiceService.recipes;
  }
  deleterecipe(movie_to_be_deleted: any) {
    console.log('parent', movie_to_be_deleted);
    this.RecipeServiceService.delete_the_recipe(movie_to_be_deleted);
  }
}
