"use client"
import Link from "next/link";

import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useChatStore } from "@/store/chat-store";

export const AppSidebarMenuItems = () => {
  const { chats } = useChatStore();

  return (
    <SidebarGroupContent>
      <SidebarMenu>
        
        {chats.map((chat) => (
          <SidebarMenuItem key={chat.id}>
            <SidebarMenuButton>
              <Link href={`/c/${chat.id}`} className="flex items-center gap-2 text-nowrap truncate">
                {chat.title}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};
