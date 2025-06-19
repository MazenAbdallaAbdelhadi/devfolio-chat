import { DownloadIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const AppSidebarFooter = () => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <Card className="gap-2 py-4 shadow-none group-data-[collapsible=icon]:border-none text-nowrap">
            <CardHeader className="px-4 group-data-[collapsible=icon]:hidden">
              <CardTitle>Open to Work</CardTitle>
              <CardDescription>Currently searching for a job.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 group-data-[collapsible=icon]:p-0">
              <SidebarMenuButton
                tooltip="download CV"
                className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/80 justify-center group-data-[collapsible=icon]:justify-start"
              >
                <DownloadIcon />
                <span>download CV</span>
              </SidebarMenuButton>
            </CardContent>
          </Card>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};
