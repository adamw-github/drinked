'use server'

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
    for (var drink of catalogue){
        console.log(drink.id + " -> " + drinkId)
        if (drink.id === drinkId){
            return drink as Drink;
        }
    }
    return catalogue[0] as Drink;
}