import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import MainSection from './Main-section';
import { Separator } from '@/components/ui/separator';
import PersonalSection from './Personal-section';
const HomeSideBar = () => {
    return (
        <Sidebar className='pt-16 z-40 border-none' collapsible='icon'>
            <SidebarContent className='bg-background'>
                <MainSection />
                <Separator />
                <PersonalSection/>
            </SidebarContent>
        </Sidebar>
    );
};

export default HomeSideBar;