import Image from 'next/image';
import Head from '@/components/header';

export default function Test() {
    return (
        <div className='z-0'>
        <Image
            src="/lasershark.png"
            width={500}
            height={500}
            alt="lasershark"
        />
        </div>
        
    );
}