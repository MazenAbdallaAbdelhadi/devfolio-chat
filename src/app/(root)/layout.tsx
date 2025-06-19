import { Button } from "@/components/ui/button";
import { Stack } from "@/components/layout";
import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { UserButton } from "@/components/user-button";
import { Sparkle } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <Stack direction="row" className="gap-0 h-screen w-full">
      <AppSidebar />

      <Stack className="flex-1 h-full">
        <Stack
          direction="row"
          align="center"
          justify="between"
          className="p-4 h-14 border-b"
        >
          <Stack direction="row">
            <SidebarTrigger size="lg" />
            <b className="text-xl">Chat Title</b>
          </Stack>

          <Button className=" rounded-3xl hover:bg-indigo-100/60 bg-indigo-100/30 text-indigo-500 dark:hover:bg-indigo-900/70 dark:bg-indigo-900/50 dark:text-indigo-300 font-semibold">
            <Sparkle className="size-5" />
            Hire Now
          </Button>

          <UserButton />
        </Stack>

        <Stack justify="center" align="center" className="flex-1">
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RootLayout;
