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
    this.recipesSubscription = this.recipesService.getAllRecipes().subscribe((recipesData) => {
      this.recipes = recipesData
    })
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }
  
  onNavigateRecipe(selectedRecipe: Recipe) {
    this.router.navigate(['recipe-details', selectedRecipe.id]);
  }
}