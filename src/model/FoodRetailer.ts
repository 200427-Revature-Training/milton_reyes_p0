export class FoodRetailer {
    retailerId: number;
	upcFood: string;
    price: number;

    constructor(retailerId: number,upcFood: string,price: number){
        this.retailerId = retailerId;
	    this.upcFood = upcFood;
	    this.price = price;
    }

    static from(obj:)
}

export interface FoodRetailerRow {
    retailerId: number;
	upcFood: string;
	price: number;
}