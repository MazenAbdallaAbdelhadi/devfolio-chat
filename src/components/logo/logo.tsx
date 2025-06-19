"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  disabledLink?: boolean;
  labeled?: boolean;
}

export function Logo({ className, disabledLink, labeled, ...rest }: LogoProps) {
  const logo = (
    <div className="flex items-center justify-center gap-1">
      <div
        className={cn(
          "relative flex size-8 justify-center items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground p-1",
          className
        )}
        {...rest}
      >
        <span className="font-semibold text-lg" >D</span>
      </div>
      {labeled && <p className="text-xl font-semibold">Devfolio</p>}
    </div>
  );

  if (disabledLink) return logo;

  return (
    <Link href="/" className="contents">
      {logo}
    </Link>
  );
}
