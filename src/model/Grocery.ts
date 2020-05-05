class Grocery extends Product {
    id: number;
    quantity: number;

    name: string;
    brand: string;
    notes: string;
    category: string;
    shelflife: string;

    constructor(id: number,quantity: number,name: string,brand: string,notes: string,category: string,shelflife: string,price: number,weight: number,upc: number,type: string,placed: string,shop: string) {
        super(id,price,weight,upc,name,type,placed,shop);
        this.id = id;
        this.quantity = quantity;

        this.name = name;
        this.brand = brand;
        this.notes = notes;
        this.category = category;
        this.shelflife = shelflife;
    }

}