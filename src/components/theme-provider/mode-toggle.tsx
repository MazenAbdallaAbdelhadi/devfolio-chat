"use client";

import * as React from "react";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { Stack } from "../layout";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Stack
      direction="row"
      gap={1}
      align="center"
      justify="center"
      className="p-0 h-8 border rounded-4xl"
    >
      <Button
        variant={theme === "system" ? "secondary" : "ghost"}
        className="size-7 p-0 rounded-full"
        onClick={() => setTheme("system")}
      >
        <MonitorIcon className="size-3" />
      </Button>
      <Button
        variant={theme === "light" ? "secondary" : "ghost"}
        className="size-7 p-0 rounded-full"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="size-3" />
      </Button>
      <Button
        variant={theme === "dark" ? "secondary" : "ghost"}
        className="size-7 p-0 rounded-full"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="size-3" />
      </Button>
    </Stack>
  );
}
