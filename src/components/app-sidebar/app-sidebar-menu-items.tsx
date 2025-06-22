import Link from "next/link";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisIcon } from "lucide-react";
import { Modal } from "../modal";

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
                <DropdownMenuItem  onSelect={(e) => e.preventDefault()}>
                  <Modal
                    trigger="✨ Brag About This Chat"
                    label="Want to flex this conversation?"
                    caption="Share the link and let the world know how cool I am (and you too, by association). 😎"
                    placeholder=""
                    submitLabel="share"
                  />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>💡 Suggest a better title</span>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <span>🤔 Don’t like this? Roast it</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};
