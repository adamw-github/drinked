'use client'
import { useContext } from "react";
import { AddDrinkContext } from "@/contexts/add-drink-context";

export function AddDrinkButton(){
    const {count, setCount} = useContext(AddDrinkContext);
    return (
        <button onClick={() => setCount(count + 1)}>{ count }</button>
    )
}

export function Drinks(){
    const {count, setCount} = useContext(AddDrinkContext);
    return (
        <button onClick={() => setCount(count + 1)}>{ count }</button>
    )
}