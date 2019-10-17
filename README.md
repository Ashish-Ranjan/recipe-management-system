# My Favorite Recipes

This project was developed with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2. and the emmbeded database used is Nedb.

## Dependency Installation

Run `npm install` for installing the dependency of the both Database as well as Angular 

## Run NeDB DataBase 

Run `node dbServer.js` for a API server. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Project Structure
```
`FavRecipe`
  |--`node_modules`  /*Contains all the dependencies of the application*/
  |--`user.db`  /*User DataBase holds User Login Id and Password Details*/
  --`recipe.db`  /*Recipe DataBase holds All Users Created Recipes*/
  --`package.json`  /*Configuration file for NodeJs*/
  --`angular.json`  /*Angular Configuration file*/
  --`tsconfig.json` /*Type Script Configuration file*/
  --`src`
      --`test.ts` /*Test Initialization file*/
      --`main.ts` /*Angular Application Bootstrap file*/
      --`polyfill.ts`  /*Legacy Browser Support*/
      --`index.html` /*Index page*/
```