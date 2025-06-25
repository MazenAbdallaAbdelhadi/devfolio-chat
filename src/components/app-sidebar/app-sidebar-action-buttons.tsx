import * as React from "react";
import Link from "next/link";
import { ImagesIcon, PlusIcon, SearchIcon } from "lucide-react";

import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { chatTopics } from "@/constants";

export const AppSidebarActionButtons = () => {
  const [commandOpen, setCommandOpen] = React.useState(false);

  return (
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="New Chat" asChild>
            <Link href="/">
              <PlusIcon />
              <span>New Chat</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Explore topics"
            onClick={() => setCommandOpen(true)}
          >
            <SearchIcon />
            <span>Explore topics</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Projects Library">
            <ImagesIcon />
            <span>Projects Library</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Search chats..." autoFocus />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Topics">
            {chatTopics.map((topic, i) => (
              <CommandItem key={i} asChild>
                <Link href={topic.href}>{topic.label}</Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </SidebarGroupContent>
  );
};
