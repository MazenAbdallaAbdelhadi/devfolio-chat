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
          "relative flex size-9 justify-center items-center rounded-xl text-white bg-primary p-1",
          className
        )}
        {...rest}
      >
        {/* TODO:PLACE LOGO INSIDE DIV & MODIFY STYLES */}
        <div className="size-8 bg-neutral-300 rounded-md" />
      </div>
      {labeled && <p className="text-xl font-semibold">Acme.</p>}
    </div>
  );

  if (disabledLink) return logo;

  return (
    <Link href="/" className="contents">
      {logo}
    </Link>
  );
}
