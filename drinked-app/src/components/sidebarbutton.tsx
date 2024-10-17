'use client'

import { useState } from 'react';
import SidebarContent from './sidebarcontent';

export default function SidebarButton() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <div className='z-50'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-transparent pl-4"
            >
                {isOpen ? "" : "Open"}
            </button>
            <SidebarContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
