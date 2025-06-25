import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { Stack } from "@/components/layout";

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <Stack direction="row" className="gap-0 h-full w-full">
      <AppSidebar />

      <Stack className="flex-1 h-full relative w-full">
        <div className="sticky top-0 z-10 bg-background shadow">
          <AppHeader/>
        </div>

        <Stack className="flex-1 pt-16">{children}</Stack>
      </Stack>
    </Stack>
  );
};

export default RootLayout;
