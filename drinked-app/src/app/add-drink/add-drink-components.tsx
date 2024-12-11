'use client'
import { useContext } from "react";
import { useDrinkContext } from "@/contexts/add-drink-context";
import { Drink } from "@/app/data-access/drink";

const asahi: Drink = {
    "id": "0",
    "name": "Asahi Super Dry",
    "category": "Beer",
    "abv": 5.0,
    "description": "Japanese rice lager with a clean, crisp and refreshing taste."
}

export function AddDrinkButton(){
    const {drinks, setDrinks} = useDrinkContext();
    return (
        <button onClick={() => setDrinks((drinks)=>[...drinks, asahi])}>Add Drink</button>
    )
}

export function Drinks(){
    const {drinks, setDrinks} = useDrinkContext();
    return (
        <button onClick={() => setDrinks(
            (drinks)=>[...drinks, asahi]
        )}>
            { drinks.map((drink) => <div key={drink.id}>{drink.name}</div>) }
        </button>
    
    )
}