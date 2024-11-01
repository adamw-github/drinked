'use client'

import { useState } from 'react';
import { revalidatePath } from 'next/cache';

import {Drink, loadDrinks, getDrink} from '../data-access/drink';

interface props{
    
}
export default async function MyDrinks(){
    const [drinks, setDrinks] = useState<Drink[]>([]);
    const catalogue = await loadDrinks();
    return (
        <div>
            <form action = {async (formData: FormData)=>{
                const newDrinkId = formData.get('id') as string;
                const temp = await getDrink(catalogue, newDrinkId);
            }}>
                <input type='text' name='id' placeholder='Enter drink id'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}