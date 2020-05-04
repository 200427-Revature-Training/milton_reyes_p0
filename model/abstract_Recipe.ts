
abstract class Recipe {
    id: number;
    name: string;
    ingredient: string;
    measurement: number;
    temperature: number;
    time: number;
    cookingware: string;

    constructor(id: number,name: string,ingredient: string,measurement: number,temperature: number,time: number,cookingware: string) {
        this.id = id;
        this.name = name;
        this.ingredient = ingredient;
        this.measurement = measurement;
        this.temperature = temperature;
        this.time = time;
        this.cookingware = cookingware;
    }
}