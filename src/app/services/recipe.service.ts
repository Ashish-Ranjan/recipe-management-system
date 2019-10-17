import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Steps } from '../models/steps.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];
  private filterRecipes: Recipe[] = [];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: string) {
    return this.recipes.filter((r) => {
      return r._id === index;
    })[0];
  }

  getRecipesFromDB() {
    this.http.get('http://127.0.0.1:3000/recipes/' + (this.recipes.length) + '/8').subscribe(responseDate => {
      responseDate[`data`].forEach(element => {
        const elementSteps = [];
        const elementIngerdient = [];
        element.cookingInstruction.forEach(step => {
          elementSteps.push(new Steps(step.step));
        });

        element.ingredients.forEach(ing => {
          elementIngerdient.push(new Ingredient(ing.name, ing.amount));
        });

        if (!this.recipes.filter((r) => {
          return r._id === element._id;
        }).length) {
          this.recipes.push(
            new Recipe(
              element.name,
              elementSteps,
              element.description,
              element.imagePath,
              element.recipeType,
              element.maxPersonSuitableFor,
              elementIngerdient,
              element._id,
              element.author)
          );
        }
      });
      this.recipesChanged.next(this.recipes.slice());
    });
  }

  filterRecipe(name: string, by: string) {
    if (by === '') {
      by = 'name';
    }
    this.recipesChanged.next(this.filterRecipes = this.recipes.filter((item) => {
      return item[by].toLowerCase().includes(name.toLowerCase());
    }));
  }

  addRecipe(recipe: Recipe) {
    delete recipe._id;
    this.http.post('http://127.0.0.1:3000/recipes/create', recipe).subscribe(responseDate => {
      recipe._id = responseDate[`_id`];
      this.recipes.push(recipe);
      if (this.filterRecipes.length) {
        this.filterRecipes.push(recipe);
        this.recipesChanged.next(this.filterRecipes.slice());
        this.router.navigate([`../`], { relativeTo: this.route });
      } else {
        this.recipesChanged.next(this.recipes.slice());
      }
    });
  }

  updateRecipe(index: string, newRecipe: Recipe) {
    this.http.post('http://127.0.0.1:3000/recipes/update', newRecipe).subscribe(responseDate => {
      if (this.filterRecipes.length) {
        this.filterRecipes.filter((item, filindex) => {
          if (item._id === newRecipe._id) {
            this.filterRecipes[filindex] = newRecipe;
            return item === newRecipe;
          }
        });
        this.recipes.filter((item, filindex) => {
          if (item._id === newRecipe._id) {
            this.recipes[filindex] = newRecipe;
            return item === newRecipe;
          }
        });
        this.recipesChanged.next(this.filterRecipes.slice());
      } else {
        this.recipes.filter((item, origindex) => {
          if (item._id === newRecipe._id) {
            this.recipes[origindex] = newRecipe;
            return item === newRecipe;
          }
        });
        this.recipesChanged.next(this.recipes.slice());
      }
    });
  }

  deleteRecipe(recipe: Recipe) {
    this.http.post('http://127.0.0.1:3000/recipes/delete', recipe).subscribe(responseDate => {
      if (this.filterRecipes.length) {
        this.recipes.slice().filter((item, index) => {
          if (item._id === recipe._id) {
            this.recipes.splice(index, 1);
            return item === recipe;
          }
        });
        this.filterRecipes.slice().filter((item, index) => {
          if (item._id === recipe._id) {
            this.filterRecipes.splice(index, 1);
            return item === recipe;
          }
        });
        this.recipesChanged.next(this.filterRecipes.slice());
      } else {
        this.recipes.slice().filter((item, index) => {
          if (item._id === recipe._id) {
            this.recipes.splice(index, 1);
            return item === recipe;
          }
        });
        this.filterRecipes.slice().filter((item, index) => {
          if (item._id === recipe._id) {
            this.filterRecipes.splice(index, 1);
            return item === recipe;
          }
        });
        this.recipesChanged.next(this.recipes.slice());
      }
    });
  }
}
