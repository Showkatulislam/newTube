import HomeLayout from "@/modules/Home/ui/layout/home-layout"

interface HomePageProps {
    children: React.ReactNode
}
export default function Home({ children }: HomePageProps) {
    return (

        <HomeLayout>
            {children}
        </HomeLayout>

    )
}