import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Recipe } from 'src/app/interfaces/Recipe';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe$: Observable<Recipe>;
  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id'])
    this.recipe$ = this.route.paramMap.pipe(
      switchMap(params => {
        let id = params.get('id');
        return this.recipesService.getRecipeById(Number(id))
      })
    )
  }
}