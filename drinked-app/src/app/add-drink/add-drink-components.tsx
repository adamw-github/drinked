'use client'

import { useDrinkContext} from "@/contexts/add-drink-context";
import { Drink } from "@/app/data-access/drink-access";

export function AddDrinkButton({catalogue}: {catalogue: Drink[]}) {
    const {drinks, setDrinks} = useDrinkContext();
    let drinkId: number = 0;

    const handleAddDrink = () => {
        if(drinkId !== null){
            setDrinks((drinks)=>[...drinks, catalogue.find(drink => drink.id === drinkId) as Drink]);
        }
    }
    return (
        <>
        <select onChange={(element)=>{
                    drinkId = Number(element.target.value);
                    handleAddDrink();
            }}>
                
            <option className='hidden'>-- Select a Drink --</option>
            {catalogue.map((drink) => (
                <option key={drink.id} value={drink.id}>
                    {drink.name}
                </option>
            ))}
        </select>
        <button onClick={() => handleAddDrink()}> 
            Add to database (Adds drink to current list for now)
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