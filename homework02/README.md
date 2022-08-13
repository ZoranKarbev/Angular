# Homework02

## Basketball App

API: https://www.balldontlie.io/

1. Use the API to fetch data within the app.component about teams and render each team in a new team.component
   (Create a team interface based on the team object)
   https://www.balldontlie.io/api/v1/teams

2. In the team component, based on the conference (EAST/WEST) of the team add dynamic inline style to the team 'div' that decides the background color of that 'div'.
   hint: You can use a ternary operator for this. (East is blue, West is red, naturally :D )

3. In the team component, based on the division, add a dynamic class to each team 'div' and style it however you like.

4. Add a property that will conditionally control whether only West or East Team component elements will render, and create a button that calls a function that toggles that property. Set the property initially to either East or West.

5. 5.1 In the Team component listen to a click event that will emit the value of the team abbreviation to the parent app.component.

   5.2 This event needs to trigger a method that makes an API call that gets players. Use the team abbreviation to only render the player from that team in a new Player component.
   (Also create a player interface based on the player object)
   https://www.balldontlie.io/api/v1/players

   6.1 In the Player component, render the player first name in lowercase. Don't use CSS or .toLowerCase()

   6.2 Render the player last name in uppercase

   7.1 Create a new stats component. Add an API call to pull stats and renders a few properties. (Don't bother creating an interface for this, the objects are too complex)

   7.2 The fg_pct property should be rendered as a percent

   7.3 Render the stat game.date property in this custom format 13 Aug 2022 (Sat), 14:22
   (Use the documentations)

This is a large homework with many requests. It has everything we've learned so far and it will test your knowledge, but it will also give you a chance to use it very similarly to how you would use it in a real application.
You DONT have to do it all at once. There is NO real deadline except the end of the angular subject.
But in any case, try to complete all the requirements, and of course, bonus points if you think of something extra to add.
Good luck!

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
