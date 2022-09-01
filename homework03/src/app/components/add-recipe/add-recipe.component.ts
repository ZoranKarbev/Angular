import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/interfaces/Recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  maximumDescriptionSize: number = 16;
  recipe: Recipe;
  recipesLength: number;  
  recipesSubscription: Subscription;
  isFormSubmitted: boolean = false;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.isFormSubmitted = false;
    this.initForm();
    this.recipesSubscription = this.recipesService.getAllRecipes().subscribe((recipesData) => {
      this.recipesLength = recipesData.length
    })
  }
  onFormSubmit() {
    if(!this.recipeForm.valid) return;
    this.recipe = { 
      id:this.recipesLength + 1, 
      ...this.recipeForm.value, 
      ingredients: this.recipeForm.value.ingredients.split(', ')
    } 
    this.recipesService.addRecipe(this.recipe);
    if (this.recipeForm.valid) {
      this.isFormSubmitted = true;
    this.recipeForm.reset();
    }
  }
  initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(this.maximumDescriptionSize)]),
      ingredients: new FormControl('', [Validators.required])
    })  
  }
}