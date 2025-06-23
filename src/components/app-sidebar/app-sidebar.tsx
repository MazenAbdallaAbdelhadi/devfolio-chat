"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

import { AppSidebarHeader } from "./app-sidebar-header";
import { AppSidebarFooter } from "./app-sidebar-footer";
import { AppSidebarActionButtons } from "./app-sidebar-action-buttons";
import { AppSidebarMenuItems } from "./app-sidebar-menu-items";

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="overflow-hidden">
      <AppSidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <AppSidebarActionButtons />
        </SidebarGroup>

        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel>Topics</SidebarGroupLabel>
          <AppSidebarMenuItems />
        </SidebarGroup>
      </SidebarContent>

      <AppSidebarFooter />
    </Sidebar>
  );
};
