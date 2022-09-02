# Workshop - The swapi app exercise

### Requirements

1. Create a new angular project and set the style to be scss
2. In the project create 2 feature modules called people and planets respectfully
3. These modules should have 2 components each , one to list the people/planets and one to show details of person/planet
4. Configure the project so that the modules are lazily loaded
5. Configure the feature modules to have their own routes leading to the components
6. The routes should be:

- localhost:4200/people
- localhost:4200/people/details/1
- localhost:4200/planets
- localhost:4200/planets/details/1

7. Add a header component that will have navigation to the newly created modules
8. Create a service called `swapi` that will handle the fetching of data
9. Use behavioral subjects for showing all planets/people and for selecting person/planet

### Endpoints used:

- People: "https://swapi.dev/api/people"
- Planets "https://swapi.dev/api/planets"

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
