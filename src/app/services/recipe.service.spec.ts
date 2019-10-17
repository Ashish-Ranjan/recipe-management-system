import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Recipe } from '../models/recipe.model';
import { Steps } from '../models/steps.model';
import { Ingredient } from '../models/ingredient.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecipeService', () => {
  const recipes = [new Recipe('test recipe',
    [new Steps('Step 1')],
    'recipe description',
    'ImagePath',
    true,
    2,
    [new Ingredient('Ingerdient 1', 3)],
    '122222dfdfs',
    'Author Name'),
  new Recipe('test recipe 1',
    [new Steps('Step 2')],
    'recipe description 1',
    'ImagePath 1',
    true,
    2,
    [new Ingredient('Ingerdient 2', 4)],
    '122222dd',
    'Author Name 1')];
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])]
  }));

  it('should be created', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });

  it('should get Recipes form Database', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect([service.getRecipesFromDB()].length).toBeGreaterThan(0);
  });

  it('should get Recipes', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service.getRecipes().length).toEqual(0);
  });

  it('should get a Recipe', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    service.recipesChanged.next(recipes);
    expect(service.getRecipe('')).toBeUndefined();
  });

  it('should Filter Recipe', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service.filterRecipe('', '')).toBeUndefined();
  });

  it('should add Recipe', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service.addRecipe(recipes[1])).toBeUndefined();
  });

  it('should Update Recipe', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service.updateRecipe('', recipes[1])).toBeUndefined();
  });

  it('should Delete Recipe', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service.deleteRecipe(recipes[1])).toBeUndefined();
  });
});
