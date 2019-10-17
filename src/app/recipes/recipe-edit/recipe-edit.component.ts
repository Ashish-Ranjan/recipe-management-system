import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params[`id`];
      this.editMode = params[`id`] != null;
      this.initForm();
    });
  }

  canEdit() {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate([`recipes`]);
      return false;
    } else if (
      this.editMode &&
      (this.recipeService.getRecipe(this.id) &&
        this.recipeService.getRecipe(this.id).author) !== this.authService.getUserName()
    ) {
      this.router.navigate([`recipes`]);
    }
    return true;
  }

  delIngerdient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  delSteps(index: number) {
    (this.recipeForm.get('cookingInstruction') as FormArray).removeAt(index);
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value[`name`],
      this.recipeForm.value[`cookingInstruction`],
      this.recipeForm.value[`description`],
      this.recipeForm.value[`imagePath`],
      !this.recipeForm.value[`recipeType`],
      this.recipeForm.value[`maxPersonSuitableFor`],
      this.recipeForm.value[`ingredients`],
      '',
      this.authService.getUserName()
    );
    if (this.editMode) {
      newRecipe._id = this.recipeService.getRecipe(this.id)._id;
      this.recipeService.updateRecipe(this.id, newRecipe);
      this.router.navigate([`../`], { relativeTo: this.route });
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  get steps() {
    return (this.recipeForm.get('cookingInstruction') as FormArray).controls;
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onAddStep() {
    (this.recipeForm.get('cookingInstruction') as FormArray).push(
      new FormGroup({
        step: new FormControl(null, Validators.required)
      })
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDesciption = '';
    let recipeType = null;
    let maxPersonSuitableFor = null;
    const recipeIngredients = new FormArray([]);
    const cookingInstruction = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      if (!recipe) {
        recipe = JSON.parse(localStorage.getItem('r'));
      }
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesciption = recipe.description;
      recipeType = !recipe.recipeType;
      maxPersonSuitableFor = recipe.maxPersonSuitableFor;

      if (recipe[`ingredients`]) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }

      if (recipe[`cookingInstruction`]) {
        for (const instruct of recipe.cookingInstruction) {
          cookingInstruction.push(
            new FormGroup({
              step: new FormControl(instruct.step, Validators.required)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDesciption, Validators.required),
      recipeType: new FormControl(recipeType),
      maxPersonSuitableFor: new FormControl(maxPersonSuitableFor, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      ingredients: recipeIngredients,
      cookingInstruction
    });
  }
}
