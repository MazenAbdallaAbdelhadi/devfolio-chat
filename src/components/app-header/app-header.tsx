import { SparkleIcon } from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import { UserButton } from "@/components/user-button";
import { Stack } from "@/components/layout";

export const AppHeader = () => {
  return (
    <Stack
      direction="row"
      align="center"
      justify="between"
      className="p-4 h-14 border-b"
    >
      <Stack direction="row">
        <SidebarTrigger size="lg" />

        {/* TODO: ADD CHAT TITLE */}
        <b className="text-xl"></b>
      </Stack>

      <Button className=" rounded-3xl hover:bg-indigo-100/60 bg-indigo-100/30 text-indigo-500 dark:hover:bg-indigo-900/70 dark:bg-indigo-900/50 dark:text-indigo-300 font-semibold">
        <SparkleIcon className="size-5" />
        Hire Now
      </Button>

      <UserButton />
    </Stack>
  );
};
