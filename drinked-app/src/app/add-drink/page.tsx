
import Image from 'next/image';
import {loadDrinks, getDrink, setDrink} from '../data-access/drink';
import { revalidatePath } from 'next/cache';

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
                </div>
                <div className='col-start-2 flex flex-col'>
                    <button className='p-3 mt-10 bg-blue-200 rounded-full'> Add new drink</button>
                    <form action = {async (formData: FormData)=>{
                        'use server';
                        const newDrinkId = formData.get('id') as string;
                        await setDrink(catalogue, newDrinkId);
                        revalidatePath('/add-drink');
                    }}>
                        <input type='text' name='id' placeholder='Enter drink id'/>
                        <button type='submit'>Add</button>
                    </form>

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