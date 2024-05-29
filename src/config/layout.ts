import {
  breakpointBase,
  breakpointL,
  breakpointM,
  breakpointS,
  breakpointXL,
  breakpointXS,
  breakpointXXL,
} from "@porsche-design-system/components-react/styles";

export const mediaQueryDescriptors = [
  "minWidthXxs",
  "minWidthXs",
  "minWidthS",
  "minWidthM",
  "minWidthL",
  "minWidthXl",
  "minWidthXxl",
] as const;

export type MediaQueryDescriptor = (typeof mediaQueryDescriptors)[number];

export type MediaQueriesValues = Record<
  MediaQueryDescriptor | "prefersReducedMotion",
  boolean
>;

export type MediaQueriesResponsiveness = Record<
  MediaQueryDescriptor,
  `(min-width: ${number}px)`
>;

export const mediaQueriesResponsiveness: MediaQueriesResponsiveness = {
  minWidthXxs: `(min-width: ${breakpointBase}px)`,
  minWidthXs: `(min-width: ${breakpointXS}px)`,
  minWidthS: `(min-width: ${breakpointS}px)`,
  minWidthM: `(min-width: ${breakpointM}px)`,
  minWidthL: `(min-width: ${breakpointL}px)`,
  minWidthXl: `(min-width: ${breakpointXL}px)`,
  minWidthXxl: `(min-width: ${breakpointXXL}px)`,
};

export const mediaQueries = {
  ...mediaQueriesResponsiveness,
  prefersReducedMotion: "(prefers-reduced-motion: reduce)" as const,
};
