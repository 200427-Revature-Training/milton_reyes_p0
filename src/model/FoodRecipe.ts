export class FoodRecipe {
    recipeId: number;
    upcFood: string;
	measurement: number;
	notes: string;
    instructions: string;

    constructor(recipeId: number,upcFood: string,measurement: number,notes: string,instructions: string){
        this.recipeId = recipeId;
        this.upcFood = upcFood;
        this.measurement = measurement;
        this.notes = notes;
        this.instructions = instructions;
    }

    static from(obj: FoodRecipeRow): FoodRecipe {
        const foodRecipe = new FoodRecipe(
            obj.recipeId,
            obj.upcFood,
            obj.measurement,
            obj.notes,
            obj.instructions
        );
        return foodRecipe;
    }
}

export interface FoodRecipeRow {
    recipeId: number;
    upcFood: string;
	measurement: number;
	notes: string;
	instructions: string;
}