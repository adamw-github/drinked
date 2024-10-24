//Separate from the sidebar button for server-side rendering

import Image from 'next/image';
import Link from 'next/link';

interface props{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function SidebarContent({isOpen, setIsOpen}: props) {

    return (
        <aside className='z-30 fixed top-0'>
        <div className="
            grid columns-1
            bg-blue-400 text-black
            rounded-r-xl">
            <div
                className={`       
                    h-screen
                    overflow-auto
                    transition-all duration-200
                    ${isOpen ? "w-60" : "w-0 overflow-hidden"}
                `}
            >
                <div className='z-50'>
                    <button onClick={() => setIsOpen(!isOpen)}
                        className="bg-transparent p-4 rounded-lg">
                        <Image
                            src="/burger.png"
                            alt="Burger Menu"
                            width={40}
                            height={40}
                            className="hover:brightness-75"
                        />
                    </button>
                </div>

                <div className="flex flex-col items-center overflow">
                    <div className="p-5">
                        <Link href="/" className="hover:text-gray-300">
                            Home
                        </Link>
                    </div>
                    <div className="p-5">
                        <Link href="/about" className="hover:text-gray-300">
                            About
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
        </aside>
    )
}