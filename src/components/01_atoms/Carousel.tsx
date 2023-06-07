"use client";

import { PCarousel } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Carousel: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PCarousel>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PCarousel {...props}>{children}</PCarousel>;
};
