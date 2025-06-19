import { Stack } from "@/components/layout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

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

          <div className="px-6 py-2 text-sm rounded-3xl bg-violet-200 text-violet-600">Hire Now</div>
          <span className="size-10 text-xl flex items-center justify-center rounded-full bg-zinc-200">
            M
          </span>
        </Stack>

        <Stack justify="center" align="center" className="flex-1">
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RootLayout;
