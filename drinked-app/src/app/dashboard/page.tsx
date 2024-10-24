import Image from 'next/image';

export default function Test() {
    return (
        <div className='midbar z-0 h-screen'>
            <div/>
        <Image
            className=''
            src="/lasershark.png"
            width={2000}
            height={2000}
            alt="lasershark"
        />
        </div>
        
    );
}