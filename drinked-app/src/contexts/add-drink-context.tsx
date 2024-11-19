'use client'

import { createContext, useState } from 'react';

export const AddDrinkContext = createContext({count: 0, setCount: (count: number) => {}});

export default function AddDrinkContextProvider(
    {children}:
        Readonly<{
            children: React.ReactNode;
        }>
    ){
    const [count, setCount] = useState(0);

    return (
        <AddDrinkContext.Provider value={{count, setCount}}>
            {children}
        </AddDrinkContext.Provider>
    )
}