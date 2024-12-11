'use client'

import { createContext, useContext, useState } from 'react';


type AddDrinkContextType = {
    drinks: string[];
    setDrinks: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddDrinkContext = createContext<AddDrinkContextType | null>(null);

export default function AddDrinkContextProvider(
    {children}:
        Readonly<{
            children: React.ReactNode;
        }>
    ){
        
    const [drinks, setDrinks] = useState<string[]>(["hi"]);

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