class Grocery extends Product {
    id: number;
    stock: number;

    name: string;

    constructor(id: number,stock: number,name: string) {
        super();
        this.id = id;
        this.stock = stock;

        this.name = name;

    }

}