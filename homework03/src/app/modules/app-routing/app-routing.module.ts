import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RecipesComponent } from 'src/app/components/recipes/recipes.component';
import { RecipeDetailsComponent } from 'src/app/components/recipe-details/recipe-details.component';
import { AddRecipeComponent } from 'src/app/components/add-recipe/add-recipe.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Recipe App'},
  {path: 'recipes', component: RecipesComponent, title: 'Recipes'},
  {path: 'recipe-details/:id', component: RecipeDetailsComponent, title: 'Recipe Details'},
  {path: 'add-recipe', component: AddRecipeComponent, title: 'Add Recipe'},
  {path: 'page-not-found', component: PageNotFoundComponent, title: 'Page not found'},
  {path: '**', redirectTo: 'page-not-found'},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
