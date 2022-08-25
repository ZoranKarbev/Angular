# Homework03

1. Create 4 components

- Home
- Add Recipe
- Recipes
- Recipe Details
- Add Recipe

2. Add routing for all routes. The Recipe details should be a single recipe, gotten by ID.

3. In the add-recipe component, add a reactive form where you will create a recipe. (Add name, description, ingredients)

3.1. The recipe itself should be an object with these properties

- id: number
- name: string
- description: string
- ingredients: string[]

  3.2 Add a required validation for the name, description and ingredients fields.
  Add a max length validation for the Description field (16 characters)

  3.3 Use the validation to render proper validation error messages under each field.

4. Create a recipe service that will keep the state of an array of recipes. You should have methods
   for returning all recipes, a single recipe by ID, and adding a new recipe.
   The ID of a new recipe should be based on the length of the recipe array.

5. The Recipes component should display a list of recipe names. Clicking on a recipe name should navigate to the recipe details page
   for that recipe.

6. The recipe details component should use the recipe ID to display all details for the recipe

Bonus: Implement a not found page in the routing.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
