import Link from "next/link";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Edit3Icon, EllipsisIcon, ShareIcon, Trash2Icon } from "lucide-react";

const items = [
  {
    label: "👋 Hey, who are you?",
    href: "/",
  },
  {
    label: "💼 Tell me about your experience",
    href: "/",
  },
  {
    label: "🚀 Show me your projects",
    href: "/",
  },
  {
    label: "🧠 What are your skills?",
    href: "/",
  },
  {
    label: "📬 Can I contact you?",
    href: "/",
  },
];

export const AppSidebarMenuItems = () => {
  return (
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton>
              <Link href={item.href} className="text-nowrap truncate">
                {item.label}
              </Link>
            </SidebarMenuButton>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction>
                  <EllipsisIcon />
                </SidebarMenuAction>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <ShareIcon/>
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit3Icon/>
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon/>
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};
