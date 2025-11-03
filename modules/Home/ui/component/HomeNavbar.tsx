import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import MyUserButton from "@/modules/auth/ui/component/UserButton";

const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-white h-16 flex items-center z-50">
            <div className="flex items-center gap-4 w-full px-2">
                <div className="flex items-center shrink-0 ">
                    <SidebarTrigger />
                    <Link href="/">
                        <div className="flex items-center gap-1 p-4">
                            <Image src="/logo.svg" width={32} height={32} alt="logo" />
                            <p className="text-xl font-semibold tracking-tight">NewTube</p>
                        </div>
                    </Link>
                </div>
                {/* searchbar */}
                <div className="flex flex-1 justify-center max-w-[770px] mx-auto">
                    <SearchBar/>
                </div>
                {/* AuthButton */}
                <div className="shrink-0 flex items-center gap-4">
                    <MyUserButton />
                </div>
            </div>
        </nav>
    );
};

export default HomeNavbar;