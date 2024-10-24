import SidebarButton from './sidebarbutton';

export default function Header() {
    return (
        <div className="midbar bg-blue-300 text-slate-50">
            <SidebarButton />
            <div className="grid grid-cols-3">
                <button className='col-start-2 text-center'>
                    <h1>Drinked</h1>
                </button>
            </div>
            <div/>
            <div/>
            <div className="grid grid-cols-4 text-center pb-2 mb-2">
                <button className="">
                    Dashboard
                </button>
                <button className="">
                    Add Drink
                </button>
                <button className="">
                    About
                </button>
                <button className="">
                    Login
                </button>
            </div>
        </div>
    )
}