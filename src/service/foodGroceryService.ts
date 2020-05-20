import { FoodGrocery } from '../model/FoodGrocery';
import * as foodGroceryDao from '../dao/FoodGroceryDao';

export function getAllFoodGroceries(): Promise<FoodGrocery[]> {
    return foodGroceryDao.getAllFoodGroceries();
}

export function getFoodGroceryByUpcFood(upcFood: string): Promise<FoodGrocery> {
    return foodGroceryDao.getFoodGroceryByUpcFood(upcFood);
}

export function saveFoodGrocery(foodGrocery: any): Promise<FoodGrocery> {

    console.log(foodGrocery);

    const newFoodGrocery = new FoodGrocery(
        foodGrocery.food, foodGrocery.upcFood, foodGrocery.notes);

    if(foodGrocery.food && foodGrocery.upcFood) {
        return foodGroceryDao.saveFoodGrocery(newFoodGrocery);
    } else {
        // TODO: We should fail here, probably issue some kind of 400
        console.warn('FoodGrocery invalid');
        return new Promise((resolve, reject) => reject(422));
    }
}


export function patchFoodGrocery(input: any): Promise<FoodGrocery> {

    const foodGrocery = new FoodGrocery(
        input.food, input.upcFood, input.notes
    );

    if (!foodGrocery.food || !foodGrocery.upcFood) {
        throw new Error('400');
    }

    return foodGroceryDao.patchFoodGrocery(foodGrocery);
}
