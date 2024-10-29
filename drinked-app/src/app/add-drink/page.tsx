
import Image from 'next/image';

export default async function AddDrink() {

    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        return response.json();
    }

    const data = await getData();
    console.log(data);
    return (
        <div className='midbar min-h-screen'>
        <main className='col-start-2 text-center'>
            <div className='w-80 h-80'>
            <Image
                src= {data.thumbnail}
                width={0}
                height={0}
                sizes="100vw"
                style={{width: 'auto', height: 'auto'}}
                alt={data.title}
            />
            <div className='p-2 bg-gray-300'>
                {data.title}<span className='rounded-lg p-2 bg-gray-100'>{data.price}</span>
            </div>
            </div>
        </main>
        </div>
    );
}