import { ImagesIcon, PlusIcon, SearchIcon } from "lucide-react";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const AppSidebarActionButtons = () => {
  return (
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="New Chat">
            <PlusIcon />
            <span>New Chat</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Search Chats">
            <SearchIcon />
            <span>Search Chats</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Projects Library">
            <ImagesIcon />
            <span>Projects Library</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  );
};
