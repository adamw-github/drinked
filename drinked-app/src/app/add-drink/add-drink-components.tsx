'use client'

import { useDrinkContext} from "@/contexts/add-drink-context";
import { Drink } from "@/app/data-access/drink-access";
import { useState } from "react";

export function AddDrinkButton({selectContent}: {selectContent: Drink[]}) {
    const {drinks, setDrinks} = useDrinkContext();
    const [drinkId, setDrinkId] = useState<number>(0);

    const handleAddDrink = () => {
        if(drinkId !== null){
            setDrinks((drinks)=>[...drinks, selectContent.find(drink => drink.id === drinkId) as Drink]);
        }
    }
    return (
        <>
        <select onChange={(element)=>{setDrinkId(Number(element.target.value));console.log(drinkId);}}>
            {selectContent.map((drink) => (
                <option key={drink.id} value={drink.id}>
                    {drink.name}
                </option>
            ))}
        </select>
        <button onClick={() => handleAddDrink()}>
            Add
        </button>
        </>
    )
}

export function Drinks(){
    const {drinks, setDrinks} = useDrinkContext();
    return (
        <div>
            { drinks.map((drink) => <div key={drink.name}>{drink.name}</div>) }
        </div>
    
    )
}