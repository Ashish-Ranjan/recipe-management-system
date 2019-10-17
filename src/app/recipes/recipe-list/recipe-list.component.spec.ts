import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { By } from '@angular/platform-browser';
import { Recipe } from 'src/app/models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Steps } from 'src/app/models/steps.model';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  const recipes: Recipe[] = [new Recipe('test recipe',
    [new Steps('Step 1')],
    'recipe description',
    'ImagePath',
    true,
    2,
    [new Ingredient('Ingerdient 1', 4)],
    '122222d',
    'Author Name'),
  new Recipe('test recipe 1',
    [new Steps('Step 2')],
    'recipe description 2',
    'ImagePath2',
    false,
    1,
    [new Ingredient('Ingerdient 2', 4)],
    '12222dd',
    'Author Name 2')];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [RecipeListComponent, RecipeItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have a app-recipe-item if recipes list empty', () => {
    const de = fixture.debugElement.query(By.css('app-recipe-item'));
    expect(de).toBeNull();
  });

  it('should have a search box by dropdown', () => {
    const de = fixture.debugElement.query(By.css('select'));
    expect(de).toBeTruthy();
    expect(de.childNodes.length).toEqual(3);
  });

  it('should have a search box', () => {
    const de = fixture.debugElement.query(By.css('input'));
    expect(de.attributes[`placeholder`]).toContain('Search');
  });

  it('should have a app-recipe-item if recipes list empty', () => {
    component.recipes = recipes;
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.directive(RecipeItemComponent));
    expect(de.name).toBe('app-recipe-item');
  });
});
