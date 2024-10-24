'use client'

import { useState } from 'react';
import SidebarContent from './sidebarcontent';
import Image from 'next/image';

export default function SidebarButton() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <div className='z-50'>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-transparent rounded-lg p-4 hover:shadow-md"
            >
                <Image
                    src="/burger.png"
                    alt="Burger Menu"
                    width={40}
                    height={40}
                />
            </button>

            <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
