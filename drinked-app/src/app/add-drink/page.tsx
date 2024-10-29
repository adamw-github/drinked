
import Image from 'next/image';

export default async function AddDrink() {

    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        return response.json();
    }

    const data = await getData();
    console.log(data);
    return (
    <div/>
    );
}