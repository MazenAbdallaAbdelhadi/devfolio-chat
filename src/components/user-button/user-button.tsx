import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";

import { ModeToggle } from "@/components/theme-provider";

import { Stack } from "@/components/layout";

import { userInfo } from "@/constants";

export const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-10">
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Info</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="px-1">
          {Object.entries(userInfo).map(([key, value]) => (
            <Stack key={key} direction="row" align="center">
              <value.icon className="size-4" />
              <span className="sr-only">{key}</span>
              <a
                href={value.href}
                target={value.target}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {value.label}
              </a>
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
        <DropdownMenuSeparator />

        <DropdownMenuGroup className="py-2 px-1">
          <Button className="w-full">Hire now</Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
