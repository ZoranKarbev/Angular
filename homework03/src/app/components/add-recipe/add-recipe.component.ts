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

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.initForm();
    this.recipesSubscription = this.recipesService.getAllRecipes().subscribe((recipesData) => {
      this.recipesLength = recipesData.length
    })
    console.log('Recipes Length', this.recipesLength)
  }
  onFormSubmit() {
    console.log("Recipe Form", this.recipeForm);
    console.log("Recipe Form Status", this.recipeForm.status);
    if(!this.recipeForm.valid) return;
    console.log('Form Value', this.recipeForm.value);
    console.log('Ingredients Value', this.recipeForm.value.ingredients.split(', '));
    this.recipe = { id:this.recipesLength + 1, ...this.recipeForm.value } 
    console.log("Recipe", this.recipe)
    this.recipesService.addRecipe(this.recipe);
    if (this.recipeForm.valid) {
    console.log("Form Submitted!");
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
