import { Ingredient } from './ingredient.model';
import { Steps } from './steps.model';

export class Recipe {
    public name: string;
    public cookingInstruction: Steps[];
    public description: string;
    public imagePath: string;
    public createdOn: Date;
    public recipeType: boolean;
    public maxPersonSuitableFor: number;
    public ingredients: Ingredient[];
    public _id: string;
    public author: string;

    constructor(
        name: string,
        cookingInstruction: Steps[],
        description: string,
        imagePath: string,
        recipeType: boolean,
        maxPersonSuitableFor: number,
        ingredients: Ingredient[],
        _id: string,
        author: string
    ) {
        this.name = name;
        this.cookingInstruction = cookingInstruction;
        this.description = description;
        this.imagePath = imagePath;
        this.recipeType = recipeType;
        this.maxPersonSuitableFor = maxPersonSuitableFor;
        this.createdOn = new Date();
        this.ingredients = ingredients;
        this._id = _id;
        this.author = author;

    }
}
