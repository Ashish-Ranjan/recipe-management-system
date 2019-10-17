import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  id: string;
  recipes: Recipe[];
  subscription: Subscription;
  constructor(
    private router: Router,
    private actiaterouter: ActivatedRoute,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.recipeService.getRecipesFromDB();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.actiaterouter.params
          .subscribe((params: Params) => {
            this.id = params[`id`];
            this.recipe = this.recipes.filter((r) => {
              return r._id === this.id;
            })[0];
            if (this.recipe) {
              localStorage.setItem('r', JSON.stringify(this.recipe));
            }
          });
        if (!this.recipe) {
          this.recipe = JSON.parse(localStorage.getItem('r'));
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isRecipeType() {
    return this.recipe.recipeType ? 'veg' : 'non-veg';
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.actiaterouter });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['/recipes']);
  }
}
