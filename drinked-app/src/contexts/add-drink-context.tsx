'use client'

import { createContext, useContext, useState } from 'react';
import { Drink } from '@/app/data-access/drink';

type AddDrinkContextType = {
    drinks: Drink[];
    setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>;
}

export const AddDrinkContext = createContext<AddDrinkContextType | null>(null);

export default function AddDrinkContextProvider(
    {children}:
        Readonly<{
            children: React.ReactNode;
        }>
    ){
        
    const [drinks, setDrinks] = useState<Drink[]>([]);

    return (
        <AddDrinkContext.Provider value={{drinks,setDrinks}}>
            {children}
        </AddDrinkContext.Provider>
    )
}

export function useDrinkContext(){
    const context = useContext(AddDrinkContext);
    if(!context){
        throw new Error('useDrinkContext must be used within a AddDrinkContextProvider');
    }
    return context;
}