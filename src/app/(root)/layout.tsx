import { Stack } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { UserButton } from "@/components/user-button";
import { Sparkle } from "lucide-react";

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <Stack direction="row" className="gap-0 h-full">
      <Stack
        gap={6}
        className="hidden md:flex w-[260px] border h-full overflow-hidden"
      >
        <Skeleton className="h-14 w-full" />

        <Stack>
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </Stack>

        <ScrollArea className="flex-1">
          <Stack>
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </Stack>
        </ScrollArea>

        <Stack
          align="center"
          justify="center"
          className="h-16 p-4 border bg-zinc-300"
        >
          CTA
        </Stack>
      </Stack>

      <Stack className="flex-1 h-full">
        <Stack
          direction="row"
          align="center"
          justify="between"
          className="p-4 h-14 border-b"
        >
          <b className="text-xl">Chat Title</b>

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
