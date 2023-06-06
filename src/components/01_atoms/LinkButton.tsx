"use client";

import { PLink } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const LinkButton: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PLink>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PLink {...props}>{children}</PLink>;
};
