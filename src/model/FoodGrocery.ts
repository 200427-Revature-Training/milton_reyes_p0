export class FoodGrocery {
    food: string;
    upc: string;
    notes: string;

    constructor(food:string,upc:string,notes:string){
        this.food = food;
        this.upc = upc;
        this.notes = notes;
    }

    static from(obj: FoodGroceryRow): FoodGrocery{
        const foodGrocery = new FoodGrocery(obj.food,obj.upc,obj.notes);
        return foodGrocery;
    }

}

export interface FoodGroceryRow {
    food: string;
    upc: string;
    notes: string;
}