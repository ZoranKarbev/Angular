import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/interfaces/Recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    this.recipesService.recipesBehaviourSubject.subscribe({
      next: (value) => (this.recipes = value),
    });
    this.recipesService.getAllRecipes();

    // const selektiranRecept = this.recipesService.getRecipeById(2)
    console.log(this.recipes)
    // console.log("selektiran recept", selektiranRecept)
    //fetch recipes
    //subscribe recipes
  }

  onNavigateRecipe(selectedRecipe: Recipe) {
    console.log(selectedRecipe);
    this.router.navigate(['recipe-details', selectedRecipe.id]);
  }
}
