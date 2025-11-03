"use client"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SignedIn, useClerk } from "@clerk/nextjs";
import {  History, ListVideo,  ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "History",
        url: "/playlists/history",
        icon: History,
        auth:true
    },
    {
        title: "Like videos",
        url: "/playlists/liked",
        icon: ThumbsUpIcon,
        auth:true
    },
    {
        title: "All Playlist",
        url: "/playlists",
        icon: ListVideo,
        auth:true
    }
]
const PersonalSection = () => {
    const clerk = useClerk()
    return (
        <SidebarGroup >
            <SidebarGroupLabel>You</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title} >
                            <SidebarMenuButton asChild tooltip={item.title} isActive={false}
                                onClick={e => {
                                    if (!SignedIn && item.auth) {
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

export default PersonalSection;