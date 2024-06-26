import Logo from "./Logo.tsx";
import SearchForm from "./SearchForm.tsx";
import FavoriteLocation from "./FavoriteLocation.tsx";
import FavoriteLocationDropDown from "./FavoriteLocationDropDown.tsx";

function Header() {
    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
               <Logo/>

                <div className="flex items-center gap-4 relative">
                    <SearchForm/>
                    <FavoriteLocation/>
                    <FavoriteLocationDropDown/>
                </div>
            </nav>
        </header>
    );
}

export default Header;