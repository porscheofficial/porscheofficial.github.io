"use client";

import { PFlyout } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Flyout: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PFlyout>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PFlyout {...props}>{children}</PFlyout>;
};
