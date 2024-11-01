import { promises as fs } from 'fs';

export type Drink = {
    id: string;
    name: string;
    category: string;
    abv: number;
    description: string;
};

(global as any).drink = {
    id: "0",
    name: "Asahi Super Dry",
    category: "Beer",
    abv: 5.0,
    description: "Japanese rice lager with a clean, crisp and refreshing taste."
} as Drink;

export async function loadDrinks(){
    const file = await fs.readFile(process.cwd() + '/public/drink_catalogue.json', 'utf-8');
    return JSON.parse(file).drinks as Drink[];
}

export async function getDrink(catalogue: Drink[], drinkId: string){
    return (global as any).drink;
}

export async function setDrink(catalogue: Drink[], drinkId: string){
    for (var drink of catalogue){
        console.log(drink.id + " -> " + drinkId)
        if (drink.id === drinkId){
            (global as any).drink = drink
            break;
        }
    }
}