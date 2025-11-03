
import { SearchIcon, UserSquareIcon } from "lucide-react";

const SearchBar = () => {
    return (
        <form className="max-w-[600px] w-full flex">
            <div className="relative w-full">
                <input type="text" placeholder="Search" className="w-full pl-4 py-2.5 pr-12 border rounded-l-full focus:outline-none focus:border-blue-500"/>
            </div>
            <button className="bg-gray-100 px-5 py-2.5 rounded-r-full">
                <SearchIcon className="size-5"/>
            </button>
        </form>
    );
};

export default SearchBar;