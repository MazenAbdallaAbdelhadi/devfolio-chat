import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";

import { ModeToggle } from "@/components/theme-provider";
import { UserAvatar } from "@/components/user-avatar";

import { Stack } from "@/components/layout";

import { userInfo } from "@/constants";
import { cn } from "@/lib/utils";

export const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup className="px-1">
          {Object.entries(userInfo).map(([key, value]) => (
            <Stack key={key} direction="row" align="center">
              <value.icon className="size-4" />
              <span className="sr-only">{key}</span>
              <Link
                href={value.href}
                target={value.target}
                className={cn(
                  buttonVariants({
                    variant: key !== "name" ? "link" : "ghost",
                    size: key === "name" ? "lg" : "sm",
                  }),
                  "flex flex-col gap-1 py-4 px-1"
                )}
              >
                <span>{value.label}</span>
                <span className="text-xs self-start text-muted-foreground">
                  {value.href === "/" && (value.caption as string)}
                </span>
              </Link>
            </Stack>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="py-2 px-1">
          <Stack direction="row" align="center" justify="between">
            <span className="text-sm font-semibold">Theme</span>
            <ModeToggle />
          </Stack>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
