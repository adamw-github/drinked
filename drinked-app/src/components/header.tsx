import SidebarButton from './sidebarbutton';

export default function Header() {
    return (
        <div className="midbar bg-blue-300 text-slate-50 pt-4">
            <SidebarButton />
            <div className="grid grid-cols-3">
                <div className='col-start-2 text-center'>
                    <h1>Drinked</h1>
                </div>
            </div>
            <div/>
            <div/>
            <div className="grid grid-cols-4 text-center">
                <div className="border">
                    Dashboard
                </div>
                <div className="border">
                    Add Drink
                </div>
                <div className="border">
                    About
                </div>
                <div className="border">
                    Login
                </div>
            </div>
        </div>
    )
}