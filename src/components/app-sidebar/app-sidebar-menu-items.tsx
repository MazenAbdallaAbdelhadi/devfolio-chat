import Link from "next/link";
import {
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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
              <Link href={item.href} className="text-nowrap">{item.label}</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};
