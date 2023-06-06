"use client";

import { PLinkPure } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const LinkPure: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PLinkPure>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PLinkPure {...props}>{children}</PLinkPure>;
};
