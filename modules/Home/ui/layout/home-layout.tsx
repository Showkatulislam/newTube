import { SidebarProvider } from "@/components/ui/sidebar"
import HomeNavbar from "../component/HomeNavbar"
import HomeSideBar from "../component/home-sidebar"

interface HomeLayoutProps {
    children: React.ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <SidebarProvider>
            <div className="w-full">
                <HomeNavbar />
                <div className="pt-16 flex items-center">
                    <HomeSideBar />
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}