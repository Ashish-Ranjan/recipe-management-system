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
  |
  |--`node_modules`                                                                      /*Contains all the dependencies of the application*/
  |--`user.db`                                                                           /*User DataBase holds User Login Id and Password Details*/
  |--`recipe.db`                                                                         /*Recipe DataBase holds All Users Created Recipes*/
  |--`package.json`                                                                      /*Configuration file for NodeJs*/
  |--`angular.json`                                                                      /*Angular Configuration file*/
  |--`tsconfig.json`                                                                     /*Type Script Configuration file*/
  |--`src`
       |
       |--`test.ts`                                                                      /*Test Initialization file*/
       |--`main.ts`                                                                      /*Angular Application Bootstrap file*/
       |--`polyfill.ts`                                                                  /*Legacy Browser Support*/
       |--`index.html`                                                                   /*Index page*/
       |--`styles.css`                                                                   /*Global Css*/
       |--`favicon.ico`                                                                  /*Titlebar Icon*/
       |--`environments`
       |      |     
       |      |--`environment.prod.ts`                                                   /*production configuration file*/
       |      |--`environment.ts`                                                        /*development configuration file*/
       |
       |--`asserts`
       |      |--`fonts`                       
       |      |--`images`
       | 
       |--`app` 
           |
           |--`app.module.ts`                                                            /*bootstrap Angular application and includes all components and UI dependencies*/
           |--`app-routing.module.ts`                                                    /*includes the route's for the applications*/
           |--`app.component.(ts, css, html, spec.ts)`                                   /*app Component Parent for all the components*/
           |
           |--`header`
           |      |
           |      |--`header.component.(ts, css, html, spec.ts)`                         /*header Component contains Nav for the application*/
           |
           |--`footer`
           |      |
           |      |--`footer.component.(ts, css, html, spec.ts)`                         /*footer Component contains copy right details*/
           |
           |--`login`
           |      |
           |      |--`login.component.(ts, css, html, spec.ts)`                          /*login Component contains user login form and functionalities*/
           |
           |--`signup`
           |      |
           |      |--`signup.component.(ts, css, html, spec.ts)`                         /*signup Component contains user registeration form and functionalities*/
           |
           |--`models`
           |      |
           |      |--`recipe.model.(ts, spec.ts)`                                        /*recipe model for storing recipe details*/
           |      |--`ingredient.model.(ts, spec.ts)`                                    /*ingredient model for storing ingredients for recipe*/
           |      |--`steps.model.(ts, spec.ts)`                                         /*steps model for storing cooking instructions for each recipe*/
           |      
           |--`services`
           |      |
           |      |--`auth.guard.ts`                                                     /*holds canActivate fuctionality for route*/
           |      |--`auth.service.(ts, spec.ts)`                                        /*holds authentication fuctionality for users login and registeration*/
           |      |--`recipe.service.(ts, spec.ts)`                                      /*holds recipe create delete update fuctionality for recipe*/
           |      
           |--`recipes`
                  |
                  |--`recipe.component.(ts, css, html, spec.ts)`                         /*recipe component parent for call recipe child components*/
                  |
                  |--`recipe-start`
                  |      |
                  |      |--`recipe-start.component.(ts, css, html, spec.ts)`            /*recipe-start component holds banner for application*/
                  |
                  |--`recipe-edit`
                  |      |
                  |      |--`recipe-edit.component.(ts, css, html, spec.ts)`             /*recipe-edit component holds form for recipe addition deletion and modification*/
                  |
                  |--`recipe-detail`
                  |      |
                  |      |--`recipe-detail.component.(ts, css, html, spec.ts)`           /*recipe-detail component represent each recipe selected from the list*/
                  |        
                  |--`recipe-list`
                         |
                         |--recipe-item
                         |       |
                         |       |--`recipe-item.component.(ts, css, html, spec.ts)`     /*recipe-item component represent each recipe of an array*/
                         |
                         |--`recipe-list.component.(ts, css, html, spec.ts)`             /*recipe-list component represent array of all recipes*/

```   

## ts

`.ts` file contains functionalities of specific components respectivly

## css

`.css` file contains style sheets for specific components respectively

## html

`.html` file contains templated for specific components respectively

## spec.ts

`.spec.ts` file contains each components test cases