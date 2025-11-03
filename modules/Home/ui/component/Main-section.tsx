"use client"
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SignedIn, useClerk } from "@clerk/nextjs";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon,
    },
    {
        title: "Subcriptions",
        url: "/feed/subcription",
        icon: PlaySquareIcon,
        auth:true
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon
    }
]
const MainSection = () => {
    const clerk = useClerk()
    return (
        <SidebarGroup >
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} >
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                isActive={false}
                                onClick={(e) => {
                                    if (!SignedIn && item.auth) {
                                        e.preventDefault()
                                        return clerk.openSignIn()
                                    }
                                }}
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup >
    );
};

export default MainSection;