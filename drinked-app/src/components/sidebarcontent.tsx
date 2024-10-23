//Separate from the sidebar button for server-side rendering

interface props{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function SidebarContent({isOpen, setIsOpen}: props) {

    return (
        <div className='z-30 fixed top-0  rounded-xl'>
        <div className="grid columns-1 rounded-xl">
            <aside
                className={`
                    z-10
                    bg-blue-400 text-slate-50
                    h-screen
                    rounded-r-xl
                    transition-all duration-300
                    ${isOpen ? "w-60" : "w-0 overflow-hidden"}
                `}
            >
                <div className='z-50'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`
                            bg-transparent
                            p-4 rounded-lg
                            ${isOpen ? "border" : "border-0"}`}
                    >
                        {isOpen ? "Close" : "Open"}
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="p-2">
                        <a href="#" className="hover:text-gray-300">
                            Home
                        </a>
                    </div>
                    <div className="p-2">
                        <a href="#" className="hover:text-gray-300">
                            About
                        </a>
                    </div>
                </div>
            </aside>
            
            
        </div>
        </div>
    )
}