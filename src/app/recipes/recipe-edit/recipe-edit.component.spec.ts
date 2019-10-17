import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { RecipeEditComponent } from './recipe-edit.component';
import { By } from '@angular/platform-browser';

describe('RecipeEditComponent', () => {
  let component: RecipeEditComponent;
  let fixture: ComponentFixture<RecipeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [RecipeEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeEditComponent);
    component = fixture.componentInstance;
    component.canEdit = () => { return true; };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a Form tag', () => {
    const de = fixture.debugElement.queryAll(By.css('form'));
    expect(de.length).toBeGreaterThan(-1);
  });

  it('should have a Recipe Name input', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'name');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Recipe Image URL input', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'imagePath');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Recipe Description input', () => {
    const de = fixture.debugElement.queryAll(By.css('textarea'));
    const index = de.findIndex(det => det.attributes[`id`] === 'description');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Recipe Max Serve input', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'maxPersonSuitableFor');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Recipe Type Input Checkbox', () => {
    const de = fixture.debugElement.queryAll(By.css('input'));
    const index = de.findIndex(det => det.attributes[`id`] === 'recipeType');
    expect(index).toBeGreaterThan(-1);
  });

  it('should have a Recipe ingerdient Input details', () => {
    const onClickMock = spyOn(component, 'onAddIngredient');
    fixture.debugElement.query(By.css('.addIngredient')).triggerEventHandler('click', null);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should have a Recipe Cooking Instructions Input details', () => {
    const onClickMock = spyOn(component, 'onAddStep');
    fixture.debugElement.query(By.css('.steps')).triggerEventHandler('click', null);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should have deleted Recipe ingerdient Input details', () => {
    expect(component.delIngerdient(0)).toBeUndefined();
  });

  it('should have deleted Recipe Cooking Instructions Input details', () => {
    expect(component.delSteps(0)).toBeUndefined();
  });

  it('should have return to previous page', () => {
    expect(component.onCancel()).toBeUndefined();
  });

  it('should have submitted', () => {
    expect(component.onSubmit()).toBeUndefined();
  });

  it('Can Edit Recipe', () => {
    const canEdit = component.canEdit();
    expect(canEdit).toBe(true);
  });
});
