import Link from "next/link";
import { toast } from "sonner";
import { EllipsisIcon, MessageSquare } from "lucide-react";

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
import { Modal } from "@/components/modal";
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
                <MessageSquare className="h-4 w-4" />
                {chat.title}
              </Link>
            </SidebarMenuButton>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction>
                  <EllipsisIcon />
                </SidebarMenuAction>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Modal
                    trigger="✨ Brag About This Chat"
                    label="Want to flex this conversation?"
                    caption="Share the link and let the world know how cool I am (and you too, by association). 😎"
                    submitLabel="Copy Link"
                    isCopyUrl={true}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Modal
                    trigger="💡 Suggest a better title"
                    label="Got a spicier title in mind?"
                    caption="I’m always on the hunt for snappier, funnier, or just plain cooler chat titles. If you’ve got one — shoot your shot. Worst case? I ignore it. Best case? You’re a naming legend. 🧠✨"
                    placeholder="Enter your suggested title..."
                    submitLabel="Submit"
                    onSubmit={(value) => {
                      console.log("Suggested title:", value);
                      // TODO: Handle the title suggestion here
                      toast.success(
                        "🪄 Your title has been summoned… now we wait."
                      );
                    }}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Modal
                    trigger="🤔 Don't like this? Roast it"
                    label="Not vibing with this chat?"
                    caption="Tell me what’s bugging you — boring title? Bad vibes? Existential dread? Drop your roast, rant, or revision idea below. I promise I’ll read it (eventually). 😅"
                    placeholder="Enter your roast..."
                    submitLabel="Send Roast"
                    onSubmit={(value) => {
                      console.log("Roast:", value);
                      // TODO: Handle the roast submission here
                      toast.success(
                        "✅ Got it! Your suggestion has been yeeted into my idea vault. If it survives the review roast, it just might make it in. 🤞"
                      );
                    }}
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};
