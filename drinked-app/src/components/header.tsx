import SidebarButton from './sidebarbutton';

export default function Header() {
    return (
        <div className="midbar bg-blue-300 text-slate-50 pt-4 pb-4">
            <SidebarButton />
            <div className="border text-center">
            Test Header
            </div>
        </div>
    )
}