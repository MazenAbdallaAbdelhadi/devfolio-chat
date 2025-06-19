import React from "react";

import { cn } from "@/lib/utils";
import { CRange, GRange, ResponsiveValue } from "./types";
import { getResponsiveClasses } from "./helper";

interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: ResponsiveValue<CRange>;
  gap?: ResponsiveValue<GRange>;
}

export const Grid: React.FC<IGridProps> = ({
  cols,
  gap,
  className,
  ...props
}) => {
  const colsClassName = getResponsiveClasses(
    cols,
    1,
    (val) => `grid-cols-${val}`
  );
  const gapClasses = getResponsiveClasses(gap, 4, (val) => `gap-${val}`);

  return (
    <div
      className={cn("grid", ...colsClassName, ...gapClasses, className)}
      {...props}
    />
  );
};
