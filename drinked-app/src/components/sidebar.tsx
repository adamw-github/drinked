'use client'

import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='absolute top-0 z-30'>
        <div className="flex">
            <aside
                className={`
                    
                    bg-blue-500
                    text-slate-50
                    transition-all
                    duration-300
                    z-10
                    ${isOpen ? "w-60" : "w-0 overflow-hidden"}
                `}
            >
                <div className='absolute'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-blue-500 text-white p-2"
                    >
                        {isOpen ? "Close" : "Open"}
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="p-2">
                        <a href="#" className="text-white hover:text-gray-300">
                            Home
                        </a>
                    </div>
                    <div className="mt-2 h-80">
                        <a href="#" className="text-white hover:text-gray-300">
                            About
                        </a>
                    </div>
                </div>
            </aside>
            
            
        </div>
        </div>
    )
}