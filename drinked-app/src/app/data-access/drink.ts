import { promises as fs } from 'fs';

export type Drink = {
    id: string;
    name: string;
    category: string;
    abv: number;
    description: string;
};

export async function loadDrinks(){
    const file = await fs.readFile(process.cwd() + '/public/drink_catalogue.json', 'utf-8');
    return JSON.parse(file).drinks as Drink[];
}

export async function getDrink(catalogue: Drink[], drinkId: string){
    return catalogue.find(drink => drink.id === drinkId) || {name: 'Drink not found'};
}