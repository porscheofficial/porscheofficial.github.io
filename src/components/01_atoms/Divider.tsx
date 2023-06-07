"use client";

import { PDivider } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Divider: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PDivider>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PDivider {...props}>{children}</PDivider>;
};
