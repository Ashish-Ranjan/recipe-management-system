import { Recipe } from './recipe.model';
import { Steps } from './steps.model';
import { Ingredient } from './ingredient.model';

describe('Recipe model', () => {
    const recipe = new Recipe('test',
        [new Steps('Step 1')],
        'Description',
        'ImagePath',
        true,
        2,
        [new Ingredient('Ingerdient 1', 4)],
        '122222d',
        'Author Name');

    it('create Recipe Model', () => {
        expect(recipe).toBeTruthy();
    });

    it('should have name as test', () => {
        expect(recipe.name).toContain('test');
    });

    it('should have CookingInstruction as Array of Steps', () => {
        expect(recipe.cookingInstruction).toEqual([new Steps('Step 1')]);
    });

    it('should have Description', () => {
        expect(recipe.description).toEqual('Description');
    });

    it('should have ImagePath', () => {
        expect(recipe.imagePath).toEqual('ImagePath');
    });

    it('should have type as boolean(veg=false,non-veg=true) return true', () => {
        expect(recipe.recipeType).toEqual(true);
    });

    it('should have number as maxPersonSuitableFor value as 2', () => {
        expect(recipe.maxPersonSuitableFor).toEqual(2);
    });

    it('should have ingredients as Array of Ingredient', () => {
        expect(recipe.ingredients).toEqual([new Ingredient('Ingerdient 1', 4)]);
    });

    it('should have _id', () => {
        expect(recipe._id).toEqual('122222d');
    });

    it('should have Author Name', () => {
        expect(recipe.author).toContain('Author Name');
    });
});
