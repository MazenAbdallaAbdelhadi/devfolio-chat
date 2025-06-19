import { Breakpoint, ResponsiveValue } from "./types";

export const getResponsiveClasses = <T extends number | string>(
  value: ResponsiveValue<T> | undefined,
  defaultValue: T,
  getClassName: (val: T) => string
): string[] => {
  // if no value passed
  if (!value) {
    return [getClassName(defaultValue)];
  }

  // if value was T
  if (typeof value === "string" || typeof value === "number") {
    return [getClassName(value as T)];
  }

  // resposive value case
  const classes: string[] = [];
  const breakpoints: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"];

  for (const breakpoint of breakpoints) {
    const val = value[breakpoint as keyof ResponsiveValue<T>];

    if (val !== undefined) {
      const className = getClassName(val as T);
      if (breakpoint === "base") {
        classes.push(className);
      } else {
        classes.push(`${breakpoint}:${className}`);
      }
    }
  }

  // If no base value is provided, use the default
  if (!value.base && classes.length > 0) {
    classes.unshift(getClassName(defaultValue));
  }

  return classes;
};
