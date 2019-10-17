import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RecipeDetailComponent } from './recipe-detail.component';
import { Recipe } from 'src/app/models/recipe.model';
import { Steps } from 'src/app/models/steps.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { By } from '@angular/platform-browser';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;
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
      declarations: [RecipeDetailComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    component.ngOnInit = () => { component.recipe = recipe; };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Image', () => {
    const de = fixture.debugElement.query(By.css('img'));
    expect(de.properties[`src`] === 'ImagePath').toBe(true);
  });

  it('should have a Recipe Name', () => {
    const de = fixture.debugElement.query(By.css('h3'));
    expect(de.nativeElement.innerText).toContain('test recipe');
  });

  it('should have an Author', () => {
    const de = fixture.debugElement.queryAll(By.css('.badge'));
    const index = de.findIndex(det => det.nativeElement.innerText === 'Author: Author Name');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Recipe Description', () => {
    const de = fixture.debugElement.query(By.css('.des'));
    expect(de.nativeElement.innerText).toContain('recipe description');
  });

  it('should have a Recipe Type On UI', () => {
    const de = fixture.debugElement.query(By.css('.recipe-type'));
    expect(de.nativeElement.innerText).toContain('veg');
  });

  it('should have a Recipe Max Serve', () => {
    const de = fixture.debugElement.query(By.css('.serve'));
    expect(de.nativeElement.innerText).toContain('Max Servings: 2');
  });

  it('should have a Recipe Created On', () => {
    const de = fixture.debugElement.query(By.css('.created-on'));
    expect(de.nativeElement.innerText).toContain('Created On:');
  });

  it('should have an Ingerdient', () => {
    const de = fixture.debugElement.queryAll(By.css('.ingredient'));
    expect(de.length).toBeGreaterThan(-1);
  });

  it('should have a cooking Instruction', () => {
    const de = fixture.debugElement.queryAll(By.css('.cooking-inst'));
    expect(de.length).toBeGreaterThan(-1);
  });

  it('should have Recipe Type as Veg', () => {
    expect(component.isRecipeType()).toContain('veg');
  });

  it('should have Recipe Type as Non-Veg', () => {
    component.recipe.recipeType = false;
    expect(component.isRecipeType()).toContain('non-veg');
  });


});
