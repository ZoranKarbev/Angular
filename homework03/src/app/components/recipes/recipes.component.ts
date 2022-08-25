import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/interfaces/Recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesSubscription: Subscription;
  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    // this.recipesSubscription = this.recipesService.recipesBehaviourSubject.subscribe({
    //   next: (value) => (this.recipes = value),
    // });
    this.recipesSubscription = this.recipesService.getAllRecipes().subscribe((recipesData) => {
      this.recipes = recipesData
    })
    console.log(this.recipes)   
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }
  
  onNavigateRecipe(selectedRecipe: Recipe) {
    console.log(selectedRecipe);
    this.router.navigate(['recipe-details', selectedRecipe.id]);
  }
}
