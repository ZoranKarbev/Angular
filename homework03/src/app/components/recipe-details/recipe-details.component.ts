import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/Recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    
  }
}
