import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import {  History, ListVideo,  ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "History",
        url: "/playlists/history",
        icon: History,
    },
    {
        title: "Like videos",
        url: "/playlists/liked",
        icon: ThumbsUpIcon,
    },
    {
        title: "All Playlist",
        url: "/playlists",
        icon: ListVideo
    }
]
const PersonalSection = () => {
    return (
        <SidebarGroup >
            <SidebarGroupLabel>You</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} >
                            <SidebarMenuButton asChild tooltip={item.title} isActive={false} >
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

export default PersonalSection;