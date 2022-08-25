import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../interfaces/Recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesData: Recipe[] = [
    {
      id: 1,
      name: 'Party Cake',
      description: 'Nice coffee cake',
      ingredients: ['flour', 'sugar', 'baking powder', 'salt', 'butter', 'eggs', 'milk'] 
    },
    {
      id: 2,
      name: 'Blue Cake',
      description: 'Nice blue cake',
      ingredients: ['flour', 'sugar', 'baking powder', 'salt', 'butter', 'eggs', 'milk'] 
    },
    {
      id: 3,
      name: 'Sugar Cake',
      description: 'Nice sugar cake',
      ingredients: ['flour', 'sugar', 'baking powder', 'salt', 'butter', 'eggs', 'milk'] 
    },
    {
      id: 4,
      name: 'Coffe Cake',
      description: 'Nice coffee cake',
      ingredients: ['flour', 'sugar', 'baking powder', 'salt', 'butter', 'eggs', 'milk'] 
    },
    {
      id: 5,
      name: 'Milk Cake',
      description: 'Nice milk cake',
      ingredients: ['flour', 'sugar', 'baking powder', 'salt', 'butter', 'eggs', 'milk'] 
    },
  ]

  recipesBehaviourSubject = new BehaviorSubject<Recipe[]>(this.recipesData);
  $recipesObs = this.recipesBehaviourSubject as Observable<Recipe[]>;

  constructor() { }

  getAllRecipes() {
    // console.log("Servis")
    const recipes = this.recipesBehaviourSubject.getValue();
    this.recipesBehaviourSubject.next([...recipes]);
    console.log("Servis recepti", recipes)
    // console.log(this.recipesBehaviourSubject.next(this.recipesData))
    // this.recipesBehaviourSubject.next([...this.recipesData])
    // this.recipesBehaviourSubject.next([...this.recipes])
  }
  getRecipeById(id: number) {
    const recipes = this.recipesBehaviourSubject.getValue();
    const foundRecipe = recipes.filter(recipe => recipe.id === id)
    this.recipesBehaviourSubject.next(foundRecipe)
    console.log(foundRecipe)
  }
  addRecipe(recipe: Recipe) {
    const recipes = this.recipesBehaviourSubject.getValue();
    this.recipesBehaviourSubject.next([...recipes, recipe])    
  }
}
