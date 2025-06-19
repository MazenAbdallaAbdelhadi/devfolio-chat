import React from "react";

import { cn } from "@/lib/utils";
import { GRange, ResponsiveValue } from "./types";
import { getResponsiveClasses } from "./helper";

type IAlign = "start" | "center" | "end" | "stretch" | "baseline";
type IJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
type IDirection = "col" | "row";

interface IStackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: ResponsiveValue<IDirection>;
  gap?: ResponsiveValue<GRange>;
  align?: ResponsiveValue<IAlign>;
  justify?: ResponsiveValue<IJustify>;
}

export const Stack: React.FC<IStackProps> = ({
  direction,
  gap,
  align,
  justify,
  className,
  ...props
}) => {
  const directionClasses = getResponsiveClasses(direction, "col", (val) =>
    val === "col" ? "flex-col" : "flex-row"
  );

  const gapClasses = getResponsiveClasses(gap, 2, (val) => `gap-${val}`);

  const alignClasses = getResponsiveClasses(
    align,
    "stretch",
    (val) => `items-${val}`
  );

  const justifyClasses = getResponsiveClasses(
    justify,
    "start",
    (val) => `justify-${val}`
  );

  return (
    <div
      className={cn(
        "flex",
        ...directionClasses,
        ...alignClasses,
        ...justifyClasses,
        ...gapClasses,
        className
      )}
      {...props}
    />
  );
};
