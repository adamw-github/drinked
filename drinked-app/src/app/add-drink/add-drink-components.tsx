'use client'
import { useContext } from "react";
import { useDrinkContext } from "@/contexts/add-drink-context";

export function AddDrinkButton(){
    const {drinks, setDrinks} = useDrinkContext();
    return (
        <button onClick={() => setDrinks((drinks)=>[...drinks, "test"])}>Add Drink</button>
    )
}

export function Drinks(){
    const {drinks, setDrinks} = useDrinkContext();
    return (
        <button onClick={() => setDrinks((drinks)=>[...drinks, "test"])}>{ drinks }</button>
    )
}