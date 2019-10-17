import { Steps } from './steps.model';

describe('Ingredient model', () => {
    const steps = new Steps('Step 1');

    it('create Steps Model', () => {
        expect(steps).toBeTruthy();
    });

    it('should have step as string return "Step 1"', () => {
        expect(steps.step).toEqual('Step 1');
    });
});
