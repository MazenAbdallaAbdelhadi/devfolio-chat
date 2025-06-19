type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type CRange = Range<1, 17>;
export type GRange = Range<0, 13> | 14 | 16;

export type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

export type ResponsiveValue<T> =
  | T
  | {
      [K in Breakpoint]?: T;
    };
