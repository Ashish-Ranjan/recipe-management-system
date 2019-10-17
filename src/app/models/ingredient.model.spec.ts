import { Ingredient } from './ingredient.model';

describe('Ingredient model', () => {
    const ingerdient = new Ingredient('Ingerdient 1',
        4);

    it('create Ingredient Model', () => {
        expect(ingerdient).toBeTruthy();
    });

    it('should have name as string return "Ingredient 1"', () => {
        expect(ingerdient.name).toEqual('Ingerdient 1');
    });

    it('should have amount as number return 4', () => {
        expect(ingerdient.amount).toEqual(4);
    });
});
