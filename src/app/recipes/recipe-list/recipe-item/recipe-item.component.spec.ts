import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from 'src/app/models/recipe.model';
import { Steps } from 'src/app/models/steps.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { By } from '@angular/platform-browser';

describe('RecipeItemComponent', () => {
  let component: RecipeItemComponent;
  let fixture: ComponentFixture<RecipeItemComponent>;
  const recipe = new Recipe('test recipe',
    [new Steps('Step 1')],
    'recipe description',
    'ImagePath',
    true,
    2,
    [new Ingredient('Ingerdient 1', 4)],
    '122222d',
    'Author Name');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [RecipeItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemComponent);
    component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Image', () => {
    const de = fixture.debugElement.query(By.css('img'));
    expect(de.properties[`src`] === 'ImagePath').toBe(true);
  });

  it('should have an Author', () => {
    const de = fixture.debugElement.query(By.css('small'));
    expect(de.nativeElement.innerText).toContain('Author Name');
  });

  it('should have a Recipe Name', () => {
    const de = fixture.debugElement.query(By.css('h3'));
    expect(de.nativeElement.innerText).toContain('test recipe');
  });

  it('should have Recipe Description', () => {
    const de = fixture.debugElement.query(By.css('p'));
    expect(de.nativeElement.innerText).toContain('recipe description');
  });

  it('should have Recipe Type as Veg', () => {
    expect(component.isRecipeType()).toContain('veg');
  });

  it('should have Recipe Type as Non-Veg', () => {
    component.recipe.recipeType = false;
    expect(component.isRecipeType()).toContain('non-veg');
  });
});
