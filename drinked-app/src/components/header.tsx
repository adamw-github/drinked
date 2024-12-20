import SidebarButton from './sidebarbutton';
import Link from 'next/link';
export default function Header() {
    return (
        <div className="midbar bg-blue-200">
            <SidebarButton />
            <div className="grid grid-cols-3">
                <div className='col-start-2 text-center'>
                    <button className='p-4 mt-4'>
                        <Link href="/">Drinked</Link>
                    </button>
                </div>
            </div>
            <div/>
            <div/>
            <div className="grid grid-cols-4 text-center pb-2 mb-2">
                
                <Link href="/dashboard"className='hover:shadow-md rounded-md'>
                    Dashboard
                </Link>
                <Link href="/add-drink"className='hover:shadow-md rounded-md'>
                    Add Drink
                </Link>
                <Link href="/#"className='hover:shadow-md rounded-md'>
                    Login
                </Link>
                <Link href="/#"className='hover:shadow-md rounded-md'>
                    About
                </Link>
            </div>
        </div>
    );
}