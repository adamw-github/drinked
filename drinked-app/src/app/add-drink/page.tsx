'use server'

import Image from 'next/image';
import {loadDrinks, getDrink} from '../data-access/drink';
import AddDrinkContextProvider from '@/contexts/add-drink-context';
import { AddDrinkButton , Drinks} from './add-drink-components';

export default async function AddDrink() {

    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        return response.json();
    }

    const data = await getData();

    const catalogue = await loadDrinks();
    const drink = await getDrink(catalogue, "0");
    return (
        <div className='midbar min-h-screen'>
        <main className='col-start-2 text-center'>
            <div className='grid grid-cols-2'>

                <div className='col-start-1 flex flex-col'>
                    <div className='p-3 mt-10 bg-blue-200 rounded-full'>Your Drinks</div>
                    {/* <ul> >myDrinks.map(()=>{<li>myDrinks.stuff</li>}) </ul>*/}
                    {drink.name}
                    <AddDrinkContextProvider>
                        <Drinks/>
                    </AddDrinkContextProvider>
                </div>
                <div className='col-start-2 flex flex-col'>
                    <div className='p-3 mt-10 bg-blue-200 rounded-full'> Add new drink</div>
                    <AddDrinkContextProvider>
                        <AddDrinkButton/>
                    </AddDrinkContextProvider>

                    <div className='p-3 mt-10 bg-blue-200 rounded-full'>Recent Drinks</div>
                    <div className='w-80 h-80'>
                        <Image
                            src= {data.thumbnail}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{width: 'auto', height: 'auto'}}
                            alt={data.title}
                        />
                        <p className='p-2 bg-gray-300'>
                            {data.title}<span className='rounded-lg p-2 bg-gray-100'>{data.price}</span>
                        </p>
                    </div>

                    
                </div>
            </div>
        </main>
        </div>
    );
}